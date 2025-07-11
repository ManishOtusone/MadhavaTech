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
    origin: "http://localhost:5173", 
    credentials: true               
}));

//middleware
app.use(express.json());
app.use(cookieParser());

//api
app.use("/api", routes);


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);

})