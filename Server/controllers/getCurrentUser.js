exports.getCurrentUser = async (req, res) => {
    try {
        // Assuming you already have a decoded user in req.user (from middleware)
        const user = req.user;

        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
