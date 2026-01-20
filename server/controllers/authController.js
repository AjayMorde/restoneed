const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

// EMAIL SETUP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

// SIGNUP
exports.signup = async (req, res) => {
  try {
    let { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields required' });
    }

    email = email.trim().toLowerCase();

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!role) role = "staff";

    // 🔥 GENERATE OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    const expiry = new Date(Date.now() + 5 * 60000); // 5 mins

    await User.create({
      email,
      password: hashedPassword,
      role,
      otp,
      otpExpiry: expiry,
      isVerified: false
    });

    // SEND EMAIL
    await transporter.sendMail({
      to: email,
      subject: "RestoNeed OTP Verification",
      html: `<h3>Your OTP is: ${otp}</h3><p>Valid for 5 minutes</p>`
    });

    res.status(201).json({
      message: 'OTP sent to email',
      role
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// VERIFY OTP
exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    if (new Date() > user.otpExpiry) {
      return res.status(400).json({ message: "OTP expired" });
    }

    await user.update({
      isVerified: true,
      otp: null,
      otpExpiry: null
    });

    res.json({ message: "Email verified successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// LOGIN
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields required' });
    }

    email = email.trim().toLowerCase();

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // 🔥 BLOCK UNVERIFIED USER
    if (!user.isVerified) {
      return res.status(403).json({ message: "Verify email first" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      token,
      role: user.role
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
