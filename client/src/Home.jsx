// eslint-disable-next-line no-unused-vars
import React from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";

function Home () {
    const [employees, SetEmployees] = useState([])
    useEffect (()=> {
        axios.get("http://localhost:3001/getUsers")
        .then(employees => {
            SetEmployees(employees.data);})
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="w-100 vh-100 -flex justify-content-center align-items-center">
            <div className="w-50">
                <table className="table">
                    <thread>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                password
                            </th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.password}</td>
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