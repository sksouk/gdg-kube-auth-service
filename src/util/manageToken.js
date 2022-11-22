const jwt = require("jsonwebtoken");
const config = require('../config');

const generateAccessToken = async (data) => {
    try {
        // TODO: Generate Token
        const accessToken = jwt.sign(data, config.secretKey.JWT_SECRET_KEY, { expiresIn: config.token.TOKEN_EXPIRE_TIME });

        // TODO: Response
        return accessToken
    } catch (error) {
        console.log("error: ", error)
        return null
    }
}

const randomNumber = (count) => {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < count; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

module.exports = {
    generateAccessToken,
    randomNumber,
}