const {getCategory,createUserData,getUserData,deleteUser,updateUser} = require('../conrollers/userController');
const router = require('express').Router();

// get the user by category
router.get('/category/:category',getCategory );

//  get user by id
router.get('/userDate/:id',getUserData)

// create a user 
router.post('/createUserDate', createUserData);

// delete the user 
router.delete('/delete/:id', deleteUser );

//update the user 
router.put('/update/:id', updateUser );





module.exports = router;