import User from "../../models/user.models.js"
import {registerValidator} from "../../validators/auth.validator.js"


export const Register = async(re, res) => {
    try {
        const{firstName, lastName, userName, password, email, phoneNumber, gender, nationality,age} = req.body
        const user = await User.findOne({email})
        if (user) {
            return res.status(409).json({message:`user with $(email) already exists`})
        }  

        const newUser = User.create ({
            firstName,
            lastName,
            password,
            userName,
            gender,
            nationality,
            age,
            phoneNumber,
            email
        })
        console.log('User created successfully')
        res.status(200).json({message: 'User created successfully'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const Login = async() => {
    try {
        
    } catch (error) {
        
    }
}

export const forgetPassword = async() => {
    try {
        
    } catch (error) {
        
    }
}

export const resetPassword = async() => {
    try {
        
    } catch (error) {
        
    }
}