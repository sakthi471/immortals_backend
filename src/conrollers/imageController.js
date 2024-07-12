const Gallery = require('../models/gallery');


module.exports.uploadImg = async (req, res) => {
  try {
    const { img } = req.body;
    const { category } = req.params;

    const gallery = new Gallery(
      {
        img,
        category,
      }
    )
    await gallery.save();
    res.status(201).json({ message: "success" })
  } catch (err) {
    res.status(500).json({ message: err.message });

  }
}


module.exports.getImg = async (req, res) => {
  try {
    const { category } = req.params;

    const results = await Gallery.find({ category })
    res.status(200).json(results)
  } catch (err) {
    res.status(500).json({ message: err.message });

  }
}

module.exports.deleteImg = async (req, res) => {
  try {
    const { id } = req.params;

    const results = await Gallery.deleteOne({ _id: id })
    res.status(200).json({message:"succeess"})
  } catch (err) {
    res.status(500).json({ message: err.message });

  }
}


