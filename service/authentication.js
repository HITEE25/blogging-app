const JWT = require("jsonwebtoken");
const secret = "hi$tee@23"

function createTokenforUser(user){
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        profileImgUrl: user.profileImgUrl,
    }
    const token = JWT.sign(payload,secret);
    return token;
}

function validateToken(token){
    const payload = JWT.verify(token,secret);
    return payload;
}

module.exports ={
    createTokenforUser,
    validateToken
}