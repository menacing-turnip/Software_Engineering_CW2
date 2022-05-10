import "./adminlogin.css";
import { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function AdminLogin() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        {/*THIS IS WHERE YOU WOULD READ FROM CSV adminTable - CODE IT IF YOU CAN!*/ }
    };
    return (
        <>
            <div className="adminlogin">
                <span className="adminLoginTitle">Admin Sign In</span>
                <form className="adminLoginForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" className="adminLoginInput" placeholder="Enter username..." ref={userRef} />
                    <label>Password</label>
                    <input type="password" className="adminLoginInput" placeholder="Enter password..." ref={passwordRef} />
                    {/*
                    <button className="adminLoginButton" type="submit" disabled={isFetching}>
                        Submit
                    </button>
                    */}
                    <button className="adminLoginButton">
                        <Link className="link" to="/admindash">Submit</Link>
                    </button>
                </form>

            </div>
        </>
    );
}