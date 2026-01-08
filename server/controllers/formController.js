const FormData = require('../models/formData');

exports.submitForm = async (req, res) => {
  try {
    const {
      restaurantname,
      managername,
      countrycode,
      mobilenumber,
      state,
      city,
      address
    } = req.body;

    if (!restaurantname || !managername || !mobilenumber) {
      return res.status(400).json({ message: 'Required fields missing' });
    }

    const formDataEntry = await FormData.create({
      restaurantname,
      managername,
      countrycode,
      mobilenumber,
      state,
      city,
      address,
    });

    res.status(201).json({
      message: 'Form saved successfully',
      data: formDataEntry
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
