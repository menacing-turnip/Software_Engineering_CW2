import axios from "axios";
import { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css"

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        {/*THIS IS WHERE YOU WOULD READ FROM CSV userTable - CODE IT IF YOU CAN!*/ }
    };

    //console.log(isFetching);
    return (
        <>
            <div className="login">
                <span className="loginTitle">Sign In</span>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" className="loginInput" placeholder="Enter username..." ref={userRef} />
                    <label>Password</label>
                    <input type="password" className="loginInput" placeholder="Enter password..." ref={passwordRef} />
                    {/*
                    <button className="loginButton" type="submit" disabled={isFetching}>
                        Submit
                    </button>
                    */}
                    <button className="loginButton">
                        <Link className="link" to="/driverdash">Submit</Link>
                    </button>
                </form>
                <p>or</p>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Sign Up</Link>
                </button>
            </div>
        </>
    )
}