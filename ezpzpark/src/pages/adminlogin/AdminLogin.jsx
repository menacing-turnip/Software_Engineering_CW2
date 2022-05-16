import "./adminlogin.css";
import { useContext } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import useFetch from '../../useFetch';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
    const [adminRef, setAdminRef] = useState('');
    const [adminPassRef, setAdminPassRef] = useState('');
    const { dispatch, isFetching } = useContext(Context);
    const { data } = useFetch('http://localhost:8000/adminTable');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        {/*THIS IS WHERE YOU WOULD READ FROM CSV adminTable - CODE IT IF YOU CAN!*/ }
        data.forEach(function (admin) {
            var currentUsername = admin.username;
            var currentPassword = admin.password;

            if (currentUsername === adminRef) {
                if (currentPassword === adminPassRef) {
                    navigate('/admindash');
                }
            }
        })
    };
    return (
        <>
            <div className="adminlogin">
                <span className="adminLoginTitle">Admin Sign In</span>
                <form className="adminLoginForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" className="adminLoginInput" placeholder="Enter username..." value={adminRef}
                        onChange={(e) => setAdminRef(e.target.value)}                     />
                    <label>Password</label>
                    <input type="password" className="adminLoginInput" placeholder="Enter password..." value={adminPassRef}
                        onChange={(e) => setAdminPassRef(e.target.value)}                     />
                    <button className="adminLoginButton" type="submit">
                        Submit
                    </button>
                    {/*
                    <button className="adminLoginButton">
                        <Link className="link" to="/admindash">Submit</Link>
                    </button>
                    */}
                </form>

            </div>
        </>
    );
}