import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
var navigate;

const Algebra = () => {
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
        <div className="Algebra">
            <h2>Algebra exam</h2>
            <form onSubmit={handleSubmit}>
                <label>Compute the matrix [123][123][456][000]:</label>
                <input
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>Why should we compare the matrix to 0?:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>What is the answer for CS?</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Viola">Orthogonal</option>
                    <option value="Jones">Not</option>
                </select>
                <button>Submit exam</button>
                {/*{error}*/}
            </form>
        </div>
    );
}

export default Algebra;