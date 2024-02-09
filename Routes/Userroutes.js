const router = require('express').Router()
const UserController = require('../Controller/Usercontroller')

router.post('/',UserController.AddUser)
router.get('/:id',UserController.GetDetails)
router.put('/:id',UserController.Update)
router.delete('/:id',UserController.DeleteUser)

module.exports = router