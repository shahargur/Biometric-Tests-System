import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
var navigate;

const Computational_Models = () => {
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
        <div className="Computational_Models">
            <h2>Computational Models exam</h2>
            <form onSubmit={handleSubmit}>
                <label>Describe what is a NP-complete problem:</label>
                <input
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>What is The Reduction used for?:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Which language is Context free?</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Viola">A</option>
                    <option value="Jones">B</option>
                </select>
                <button>Submit exam</button>
                {/*{error}*/}
            </form>
        </div>
    );
}

export default Computational_Models;