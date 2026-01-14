// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');

// router.get('/dashboard', authMiddleware, (req, res) => {
//   res.json({
//     message: 'Welcome to dashboard',
//     userId: req.userId
//   });
// });

// module.exports = router;
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// ONLY manager can access
router.get(
  '/dashboard',
  authMiddleware,
  roleMiddleware("manager"),
  (req, res) => {
    res.json({
      message: 'Welcome Manager',
      userId: req.userId,
      role: req.userRole
    });
  }
);

module.exports = router;
