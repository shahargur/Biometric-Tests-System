import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
var navigate;

const Programming_Principles = () => {
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
        <div className="Programming_Principles">
            <h2>Programming Principles exam</h2>
            <form onSubmit={handleSubmit}>
                <label>Describe what is a Compiler:</label>
                <input
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>What is The type of Object?:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Which language has types?</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Viola">Python</option>
                    <option value="Jones">JS</option>
                </select>
                <button>Submit exam</button>
                {/*{error}*/}
            </form>
        </div>
    );
}

export default Programming_Principles;