const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();
//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.status(201).json({
        message: "welcome to blood bank app"
    })
})
//routes

app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`.rainbow)

})