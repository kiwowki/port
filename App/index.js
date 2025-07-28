const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
// 임시 수정
const port = process.env.PORT || 8080;
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// express router
app.use("/api/reple", require("./server/router/reple.js"));

app.listen(port,'0.0.0.0', () => {
    mongoose
        // .connect(config.mongoURI)
        .connect("mongodb+srv://wolves941110:rkdtjr00%21%21@cluster0.efj98qh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err)
        })
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});