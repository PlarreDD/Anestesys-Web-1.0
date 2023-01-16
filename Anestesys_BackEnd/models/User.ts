import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: {unique: true},
    },

    password:{
        type: String,
        required: true,
    },

    nomMed:{
        type: String,
        required: true,
    },

    apMed:{
        type: String,
        required: true,
    },
});

userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified("password")) return next();

    try{
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();
    }catch(err){
        console.log(err);
        throw new Error("Fallo el hash de contraseña");
    }
});

userSchema.methods.comparePassword = async function(candidatePassword: any): Promise<boolean> {
    return await bcryptjs.compare(candidatePassword, this.password);
};

export const User = model('user', userSchema);
