const jwt = require("jsonwebtoken");
require("dotenv").config();


exports.auth = async (req, res, next) => {
    try {
        const token = req.cookies.token;


        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing."
            });
        }

        try {

            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode


        }
        catch (error) {

            return res.status(401).json({
                success: false,
                message: 'token is invalid.'
            });

        }
        next();

    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Something went wrong while validating the token.'
        });


    }

}


exports.isAdmin = async (req, res, next) => {

    try {
        if (req.user.accountType !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for admin only",
            })
        }
        next();

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again.'
        })
    }

}