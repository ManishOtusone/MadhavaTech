const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./database/dbConnection.js");
const routes = require("./routes/routes.js")
const cookieParser = require("cookie-parser");




const PORT = process.env.PORT || 5000;
dbConnection();

app.use(cors({
    origin: ["*", "http://localhost:5173", "https://madhava-tech-frontend.vercel.app"],
    credentials: true
}));

//middleware
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api", routes);
app.use("", (req, res) => {
    return res.send("welcome to madvas");

});


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

})