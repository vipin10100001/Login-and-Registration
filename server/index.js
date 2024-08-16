const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.post('/register', (req, res) => {
    EmployeeModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    .then(() => {
        res.json({ message: "User registered successfully" });
    })
    .catch((err) => {
        res.json({ message: "An error occurred", error: err });
    });
});

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});
