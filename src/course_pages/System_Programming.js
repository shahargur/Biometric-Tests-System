import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
var navigate;

const Systems_Programming = () => {
    navigate = useNavigate();
    // const [error, setError] = useState("");

    const handleSubmit = () =>{
        navigate("/submit")
    }
    // return (
    //     <nav className="Biometric_Systems">
    //         <h1>Biometric Syestems exam</h1>
    //         <div className="questions">
    //             Who is the best prof in the world?
    //         </div>
    //     </nav>
    // );
    return (
        <div className="Systems_Programming">
            <h2>Systems Programming exam</h2>
            <form onSubmit={handleSubmit}>
                <label>Describe what is concurrency:</label>
                <input
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>What is client-side?:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>What Server is the best?</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Viola">Reactor</option>
                    <option value="Jones">DS</option>
                </select>
                <button>Submit exam</button>
                {/*{error}*/}
            </form>
        </div>
    );
}

export default Systems_Programming;