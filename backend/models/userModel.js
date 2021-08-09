import mongoose from 'mongoose';



const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isTheUserAdmin: {
        type: Boolean,
        required: true,
        default: false // prevents new users to create admin profiles
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;