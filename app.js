const express = require("express");
const app = express();
const mongoose = require("mongoose");

MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() => {
    console.log("connection successful")
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req, res) => {
    res.send("I am groot");
});

app.listen(8080, () => {
    console.log("app is listening on port 8080");
});