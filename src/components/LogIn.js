import React from 'react';
import {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
// import { NavigationContainer } from '@react-navigation/native'

import * as io from "socket.io-client";
import MyCourses from "./MyCourses";


//explain and code of login: https://serverless-stack.com/chapters/create-a-login-page.html

// var socket;

let socket
let navigate

const LogIn = () => {
    navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        socket = io.connect("http://localhost:5000");
        return () => socket.disconnect()
    }, []);

    function test() {
        // socket = io.connect("http://localhost:5000");
        socket.emit("test")
    }

    useEffect(() => {
        socket.on("login", (reply) => {

            if (reply.result === "success") {
                console.log(reply.email);
                navigate("/verification", {state: {list: reply.courseList, name: reply.name, email: reply.email}});
            }
            else {
                setError("Wrong credentials, try again")
            }
        });
        return () => {
            socket.off("login")
        }
    }, []);


    const handleClick = (e) =>{
        e.preventDefault()
        socket.emit("loginAttempt", {email: email, password: password})
    }


    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    return (
        <div className="LogIn">
            <button onClick = {test}> Nevo Habozeach </button>
            <Form onSubmit={handleClick}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    LogIn
                </Button>
                {error}
            </Form>
        </div>
    );
}

export default LogIn;