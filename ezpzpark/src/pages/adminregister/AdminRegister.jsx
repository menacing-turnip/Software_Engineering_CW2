import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import "./adminregister.css"
import { useNavigate } from 'react-router-dom'

export default function AdminRegister() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newAdminUser = {username, email, password};

        //POST request
        fetch('http://localhost:8000/adminTable', {
            method: 'POST',
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(newAdminUser)
        }).then(() => {
            console.log('added a request');
            setTimeout(() => {   navigate('/admindash'); }, 1000);
        })
    };
    return (
        <>
            <div className="adminregister">
                <span className="adminRegisterTitle">Register New Administrator Account</span>
                <form className="adminRegisterForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input
                        type="text"
                        className="adminRegisterInput"
                        placeholder="Enter username..."
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label>Email</label>
                    <input
                        type="text"
                        className="adminRegisterInput"
                        placeholder="Enter email..."
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        className="adminRegisterInput"
                        placeholder="Enter password..."
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="adminRegisterButton" type="submit">
                        Submit
                    </button>
                </form>
                <button className="adminReturnButton">
                    <Link className="link" to="/admindash">Return to Dashboard</Link>
                </button>
                {/*THIS IS WHAT A COMMENT LOOKS LIKE IN JSX!*/}
                {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
            </div>
        </>
    )
}
