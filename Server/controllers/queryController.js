const Query = require("../models/querySchema");

// Create new query 
exports.createQuery = async (req, res) => {
    try {
        const { name, email, phoneNumber, subject, message } = req.body;

        const newQuery = await Query.create({
            name,
            email,
            phoneNumber,
            subject,
            message,
        });

        res.status(200).json({
            success: true,
            message: "Query submitted successfully",
            data: newQuery,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
};

// Admin: Get all queries
exports.getAllQueries = async (req, res) => {
    try {
        const queries = await Query.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: queries,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

// Admin: Update status
exports.updateQueryStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!["pending", "in-progress", "resolved"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid status",
            });
        }

        const updatedQuery = await Query.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedQuery) {
            return res.status(404).json({
                success: false,
                message: "Query not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Query status updated",
            data: updatedQuery,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};
