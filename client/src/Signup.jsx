//import { useState } from 'react'

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [error, setErrors] = useState({});
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validation();
    setErrors(error);
    if (Object.values(error).every(error => error === "")) {
        axios.post("http://localhost:3001/register", { fname, lname, age, gender, email })
        .then((result) => {
          console.log(result);
          alert("successful");
          navigate("/login");
        })
        .catch((err) => console.log(err));
        
      } else {
        // If there are validation errors, do not proceed with registration
        alert("Please fix the errors before submitting the form.");
      } 
      
  };

  const validation = () => {
    const error = {};

    if (!fname) {
      error.fname = "First Name is Required";
    } else {
      error.fname = "";
    }

    if (!lname) {
      error.lname = "Last Name is Required";
    } else {
      error.lname = "";
    }

    if (!age) {
      error.age = "Age is Required";
    } else {
      error.age = "";
    }

    if (!gender) {
      error.gender = "Gender is Required";
    } else {
      error.gender = "";
    }

    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "email not matched";
    } else {
      error.email = "";
    }

    if (!password) {
      error.password = "password is Required";
    } else if (password.length < 6) {
      error.password = "password not matched";
    } else {
      error.password = "";
    }

    return error;
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              autoComplete="off"
              name="fname"
              className="form-control rounded-0"
              onChange={(e) => setFname(e.target.value)}
            />
            {error.fname && <div className="text-danger">{error.fname}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              autoComplete="off"
              name="lname"
              className="form-control rounded-0"
              onChange={(e) => setLname(e.target.value)}
            />
            {error.lname && <div className="text-danger">{error.lname}</div>}
          </div>
          <div className="mb-3">
          <label htmlFor="gender">
              <strong>Select Gender  </strong>
            </label>
            <select 
               id = "gender"
               value = {gender}
               onChange={(e) => setGender(e.target.value)}
            >
              <option value="">---Select---</option>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
              
            </select>
              
            {error.gender && <div className="text-danger">{error.gender}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Age</strong>
            </label>
            <input
              type="number"
              placeholder="Enter Your Age"
              autoComplete="off"
              name="age"
              className="form-control rounded-0"
              onChange={(e) => setAge(e.target.value)}
            />
            {error.age && <div className="text-danger">{error.age}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div className="text-danger">{error.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div className="text-danger"> {error.password}</div>}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link
          to="/login"
          className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
