import {useRef, useEffect} from "react";
import React from "react";
import Webcam from "react-webcam";
import App from "../App";
import * as io from "socket.io-client";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const WebcamComponent = () => <Webcam />;
var socket;
var navigate;
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const VerificationTrial = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const [loading, setLoading] = React.useState("");
    const [error, setError] = React.useState("");

    navigate = useNavigate();
    const {state} = useLocation();
    const { list, name, email } = state; // Read values passed on state
    console.log(list)
    console.log(name)
    console.log(email)

    useEffect(() => {
        socket = io.connect("http://localhost:5000");
        return () => socket.disconnect()
    }, []);

    useEffect(() => {
        socket.on("verificationres", (reply) => {
            console.log("got reply from verification");
            if (reply.result === "success") {
                // console.log(reply);
                navigate("/myCourses", {state: {list: list, name: name}});
            }
            else {
                setLoading("")
                setError("No Verification! Get closer to the camera")
            }
        });
        return () => {
            socket.off("verification")
        }
    }, []);

    // const capture = React.useCallback(() => {
    //     const imageSrc = webcamRef.current.getScreenshot(); //base64 format
    //     setImgSrc(imageSrc);
    //     socket.emit("verification", imageSrc);
    // }, [webcamRef, setImgSrc]);
    const handleClick = (e) => {
        e.preventDefault();
        setLoading("Verifiction in progress!")
        const imageSrc = webcamRef.current.getScreenshot(); //base64 format
        setImgSrc(imageSrc);
        socket.emit("verification", {image:imageSrc, email: email});
    };

    return (
        <>
            <Webcam
                audio={false}
                height={300}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                videoConstraints={videoConstraints}
            />
            <button onClick={handleClick}>Capture photo</button>
            
            {imgSrc && (
                <img
                    src={imgSrc}
                />
            )}

            {loading}
            {error}
        </>
    );
};

export default VerificationTrial;