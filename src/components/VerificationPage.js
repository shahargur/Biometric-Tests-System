// import React from "react";
import {useRef, useEffect} from "react";
// var ref
// ref={videoRef}

const VerificationPage = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);      ////???
    const stripRef = useRef(null);      ////???

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    const paintToCanvas = () => {
        let video = videoRef.current;
        let photo = photoRef.current;
        let ctx = photo.getContext("2d");

        const width = 320;
        const height = 240;
        photo.width = width;
        photo.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 200);
    };



    const takePhoto = () => {
        let photo = photoRef.current;
        let strip = stripRef.current;

        const data = photo.toDataURL("image/jpeg");

        const link = document.createElement("a");
        link.href = data;
        link.setAttribute("download", "myWebcam");
        link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
        strip.insertBefore(link, strip.firstChild);

    };




    const getVideo = () => {

        navigator.mediaDevices
            .getUserMedia({ video: { width: 300 } })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            })
            .catch(err => {
                console.error("error:", err);
            });
    };




    return (
        <div className="VerificationPage">
            <h1>Let's see</h1>
            <button onClick={() => takePhoto()}>Take a photo</button>
            <video onCanPlay={() => paintToCanvas()} ref={videoRef} />
            <canvas ref={photoRef} />
            <div>
                <div ref={stripRef} />
            </div>
        </div>
    );
}

export default VerificationPage;