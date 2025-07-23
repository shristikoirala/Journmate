const express = require('express');
const router = express.Router();

const adminUser = require('../controller/admin/adminUserController');
const adminDestination = require('../controller/admin/adminDestinationController');
const { protect } = require('../middleware/authMiddleware');
const { requireAdmin } = require('../middleware/requireAdmin');

// All admin routes will be protected
router.use(protect, requireAdmin);

// Admin: manage users
router.get('/users', adminUser.listUsers);          // Get all users
router.delete('/users/:id', adminUser.deleteUser);  // Delete a user
router.patch('/users/:id', adminUser.updateUserRole); // Update role

// Admin: manage destinations
router.post('/destinations', adminDestination.createDestination);
router.put('/destinations/:id', adminDestination.updateDestination);
router.delete('/destinations/:id', adminDestination.deleteDestination);

module.exports = router;
