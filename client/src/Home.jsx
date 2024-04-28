// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import "./style.css";


function Home () {
    const [employees, SetEmployees] = useState([])
    useEffect (()=> {
        axios.get("http://localhost:3001/getUsers")
        .then(employees => {
            SetEmployees(employees.data);})
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="table-container">
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.fname}</td>
                                    <td>{employee.lname}</td>
                                    <td>{employee.date}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.email}</td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
}

export default Home;