const express = require("express");
const app = express();
const connectDB =require("./Config/connectDB")
connectDB()
app.use(express.json())
const contactRouter = require("./Routes/contact")
app.use("/contact",contactRouter);



app.listen(5000,(err)=>{
    err? console.log(err):console.log("serveur is running");
});