const router = require('express').Router();
const {uploadImg,getImg,deleteImg} = require('../conrollers/imageController');


// upload the img 
router.post('/upload/:category',uploadImg);

// get the images based on the category
router.get('/:category',getImg)

// delete the image by _id
router.get('/:id',deleteImg)


module.exports = router;