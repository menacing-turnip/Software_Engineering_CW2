import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.css"
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = { username, email, password };
        {/*THIS IS WHERE YOU WOULD WRITE TO CSV userTable - CODE IT IF YOU CAN!*/ }
        //POST request
        fetch('http://localhost:8000/userTable', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        }).then(() => {
            console.log('added a request');
            setTimeout(() => { navigate('/login'); }, 1000);
        })
    };
    return (
        <>
            <div className="register">
                <span className="registerTitle">Sign Up</span>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        type="text"
                        className="registerInput"
                        placeholder="Enter username..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        className="registerInput"
                        placeholder="Enter email..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="registerInput"
                        placeholder="Enter password..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="registerButton" type="submit">
                        Submit
                    </button>
                </form>
                <button className="registerLoginButton">
                    <Link className="link" to="/login">Return to Sign In Screen</Link>
                </button>
                {/*THIS IS WHAT A COMMENT LOOKS LIKE IN JSX!*/}
                {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
            </div>
        </>
    )
}