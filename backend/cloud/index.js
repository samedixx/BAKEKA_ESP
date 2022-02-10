const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'ds6qfw7sq',
    api_key: '484278212615699',
    api_secret: 'fvs0okz2Uvsd4x8d60JQRTlSsUs',
    secure: true,
});

module.exports = cloudinary;

