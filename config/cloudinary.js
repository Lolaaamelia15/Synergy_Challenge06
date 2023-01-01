const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dgcoyqolo",
    api_key: "478769487639153",
    api_secret: "JZvbs4dM6ixaiE7fsWeB9Sbp2qY",
    secure: true
});

module.exports = cloudinary;