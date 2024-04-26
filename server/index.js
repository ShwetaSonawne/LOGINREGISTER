const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./Models/Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://shwetasonawanera2:aTjiw6UVwcPTuhOx@cluster0.wfshwg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((employee) => {
    if (employee) {
      if (employee.password === password) {
        res.json("Success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("No User existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.get("/getUsers", (req, res) => {
    const { name, email, password } = req.body;
    EmployeeModel.find(req.body)
      .then((employees) => {
        res.json(employees);}
    )
      .catch((err) => res.json(err));
  });

app.listen(3001, () => {
  console.log("server is running");
});
