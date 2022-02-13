import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
var navigate;

const Biometric_Systems = () => {
    navigate = useNavigate();
    const [error, setError] = useState("");

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
        <div className="Biometric">
            <h2>Biometric Systems exam</h2>
            <form onSubmit={handleSubmit}>
                <label>What is the Point Zero on ear recognition?</label>
                <input
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>How does Viola Jones algorithm recognizes patterns?:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Who is better?</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Viola">Viola</option>
                    <option value="Jones">Jones</option>
                </select>
                <button>Submit exam</button>
                {error}
            </form>
        </div>
    );
}

export default Biometric_Systems;