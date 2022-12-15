import React, {useEffect, useState} from "react";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

import LogIn from "./LogIn";
import Navbar from "./navBar";
import * as io from "socket.io-client";

var socket
let navigate

const courses = [{title: "Biometric Systems", address: 'bio', boss: "De Marsico", id: 1},
    {title: "Machine Learning", address: 'ML', boss: "Velardi", id: 2},
    {title: "Computer Architecture", address: 'ARCHI', boss: "Shimony", id: 3},
    {title: "System Programming", address: 'SPL', boss: "Shemesh", id: 4},
    {title: "Calculus 2", address: 'CAL', boss: "Gili", id: 5},
    {title: "Algebra 1", address: 'VA', boss: "Dina", id: 6},
    {title: "Programming Principles", address: 'PPL', boss: "Shimony", id: 7},
    {title: "Computational Models", address: 'CM', boss: "Sebastian", id: 8}

]

const handleClick = (course) => {
    console.log("pressed" + course.title);
    //think with Shahar if to add "exam not open yet"
    //and then the mega Camera check
    navigate("/exams/" + course.id);

}


const MyCourses = () => {

    navigate = useNavigate();
    const {state} = useLocation();
    const { list, name } = state; // Read values passed on state
    //list is the id's of the courses that the specific student is registered to.
    console.log(list)
    console.log(name)

    useEffect(() => {
        socket = io.connect("http://localhost:5000");
        return () => socket.disconnect()
    }, []);


    return (

        <div className="myCourses">
            Courses that  {name} is registered to:
            {courses.filter(first => list.includes(first.id)).map(course => (   //taking only the ones from list
                <div className="blog-preview" key={course.id} >
                    <button
                        onClick = {() => handleClick(course)}>
                        <h2>{ course.title }</h2>
                        <p>Bossed by Professor { course.boss }</p>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default MyCourses;