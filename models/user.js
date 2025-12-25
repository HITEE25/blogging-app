const {Schema,model} = require("mongoose");
const { createHmac , randomBytes } = require("node:crypto");
const {createTokenforUser} = require("../service/authentication");


const userSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    salt:{
        type: String,
    },
    profileImgUrl:{
        type: String,
        default: "/image/default.png",
    },
    role:{
        type: String,
        enum: ["USER","ADMIN"],
        default: "USER",
    },
},
{timestamps: true}
);

//hash the password
userSchema.pre("save",function(next) {
    const user = this;

    //password field was modified before running expensive operations like hashing.
    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    //alogorithm,secret key
    const hasedPassword = createHmac("sha256",salt)
        .update(user.password)
        .digest("hex");
    //reateHmac("sha256", salt) initializes an HMAC hash using the SHA-256 algorithm and the salt as the secret key.
    //.update(user.password) feeds the user's password data into the hash.
    //.digest("hex") outputs the final hash as a hexadecimal string.
    this.salt = salt;
    this.password = hasedPassword;

    next();
})

userSchema.statics.matchPasswordAndGenrateToken = async function(email,password){
    const user = await this.findOne({email});//find with email
    if(!user) throw new Error("user not found");
    const salt = user.salt;
    const hashedPass = user.password;

    const userProvidedHash = createHmac("sha256",salt)
        .update(password)
        .digest("hex");

    if(hashedPass !== userProvidedHash){
        throw new Error("Incorrect password");
    }

    const token = createTokenforUser(user);
    return token;
}

//create a model
//name model,user schema passed
const User = model("user", userSchema);

module.exports = User;