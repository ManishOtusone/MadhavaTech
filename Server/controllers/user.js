const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    try {

        const { firstName, lastName, email, password, confirmPassword, accountType, phoneNumber } = req.body;


        if (!firstName || !lastName || !email || !password || !confirmPassword || !accountType || !phoneNumber) {
            return res.status(400).json({
                success: false,
                message: "Something is missing."
            });
        }


        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and ConfirmPassword value does not match, please try again"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(401).json({
                success: false,
                message: "User already registered",
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            phoneNumber,
            accountType

        });

        return res.status(200).json({
            success: true,
            message: "User is registered Successfully",
            user
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again",

        });
    }
}



exports.logIn = async (req, res) => {
    try {

        const { email, password, accountType } = req.body;


        if (!email || !password || !accountType) {
            return res.status(400).json({
                success: false,
                message: "Something is missing."
            });
        }


        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: "User not exist. Please Signup first.",
            })
        }

        const passwordCompare = await bcrypt.compare(password, existingUser.password);
        if (passwordCompare) {

            //token
            const payload = {
                email: existingUser.email,
                id: existingUser._id,
                accountType: existingUser.accountType
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h"
            });

            existingUser.token = token;
            existingUser.password = undefined;


            //cookie

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true,
                sameSite: "None"
            };


            return res
                .cookie("token", token, options)
                .status(200)
                .json({
                    success: true,
                    message: "Logged In Successfully",
                    existingUser
                });

        }

        else {
            return res.status(401).json({
                success: false,
                message: "Incorrect Password",

            });

        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Login Failed. Please try again",

        });
    }
}


exports.logOut = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
        path: "/",
    });

    return res.status(200).json({ success: true, message: "Logged out successfully" });
};
