


// import io from 'socket.io/node_modules/socket.io-client';
import * as io from "socket.io-client";
import React, {useEffect} from 'react';
import Navbar from './components/navBar.js';
// import Home from './components/Home.js'
import { BrowserRouter as Router, Route, Routes, useNavigate} from  "react-router-dom";
import LogIn from "./components/LogIn";
import MyCourses from "./components/MyCourses";
import Biometric_Systems from "./course_pages/Biometric_Systems";
import Machine_Learning from "./course_pages/Machine_Learning";
import Visual_Analitics from "./course_pages/Visual_Analitics";
import VerificationPage from "./components/VerificationPage";
import VerificationTrial from "./components/VerificationTrial";
import Submitted from "./components/Submitted";
import System_Programming from "./course_pages/System_Programming";
import Calculus from "./course_pages/Calculus";
import Algebra from "./course_pages/Algebra";
import Programming_Principles from "./course_pages/Programming_Principles";
import Computational_Models from "./course_pages/Computational_Models";
// import socket from "./components/SharedSocket";

var socket;


function App() {

    // const navigate = useNavigate();
    // navigate('/')

    useEffect(() => {
        socket = io.connect("http://localhost:5000");
        return () => socket.disconnect()
    }, []);



  return (
    <Router>
        <div className = "App">
        The most awesome exam webapp ever

        <Routes>
            <Route exact path="/" element={<LogIn />} />
            <Route exact path="/myCourses" element={<MyCourses />} />
            <Route exact path="/exams/1" element={<Biometric_Systems />} />
            <Route exact path="/exams/2" element={<Machine_Learning />} />
            <Route exact path="/exams/3" element={<Visual_Analitics />} />
            <Route exact path="/exams/4" element={<System_Programming />} />
            <Route exact path="/exams/5" element={<Calculus />} />
            <Route exact path="/exams/6" element={<Algebra />} />
            <Route exact path="/exams/7" element={<Programming_Principles />} />
            <Route exact path="/exams/8" element={<Computational_Models />} />
            <Route exact path="/verification" element={<VerificationTrial />} />
            <Route exact path="/submit" element={<Submitted />} />
        </Routes>
            {/*<LogIn />*/}
        </div>
    </Router>

  )

}

export default App;
