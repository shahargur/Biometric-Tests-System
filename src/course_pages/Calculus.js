import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
var navigate;

const Calculus = () => {
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
        <div className="Calculus">
            <h2>Calculus exam</h2>
            <form onSubmit={handleSubmit}>
                <label>Compute f(g(x)):</label>
                <input
                    type="text"
                    required
                    // value={title}
                    // onChange={(e) => setTitle(e.target.value)}
                />
                <label>Who was Wiershtrass?:</label>
                <textarea
                    required
                    // value={body}
                    // onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>What is the answer for the universe?</label>
                <select
                    // value={author}
                    // onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Viola">42</option>
                    <option value="Jones">1</option>
                </select>
                <button>Submit exam</button>
                {/*{error}*/}
            </form>
        </div>
    );
}

export default Calculus;