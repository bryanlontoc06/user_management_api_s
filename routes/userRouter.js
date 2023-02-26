const userController = require('../controllers/userController.js');

const router = require('express').Router()

router.post('/add-user', userController.addUser)

router.get('/admin-users', userController.getAdminUsers)
router.get('/all-users', userController.getAllUsers)
router.get('/:id', userController.getUser)

router.put('/update-user/:id', userController.updateUser)

router.delete('/delete-user/:id', userController.deleteUser)
router.delete('/delete-users', userController.deleteUsers)

module.exports = router