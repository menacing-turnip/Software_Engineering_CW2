import axios from "axios";
import { useContext, useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import "./login.css"
import useFetch from '../../useFetch';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [userRef, setUserRef] = useState('');
    const [passwordRef, setPasswordRef] = useState('');
    const { dispatch, isFetching } = useContext(Context);
    const { data } = useFetch('http://localhost:8000/userTable');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        {/*THIS IS WHERE YOU WOULD READ FROM CSV userTable - CODE IT IF YOU CAN!*/ }
        data.forEach(function (user) {
            var currentUsername = user.username;
            var currentPassword = user.password;

            if (currentUsername === userRef) {
                if (currentPassword === passwordRef) {
                    localStorage.clear();
                    localStorage.setItem('user', currentUsername)
                    navigate('/driverdash');
                }
            }
        })
    };

    //console.log(isFetching);
    return (
        <>
            <div className="login">
                <span className="loginTitle">Sign In</span>
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" className="loginInput" placeholder="Enter username..." value={userRef}
                        onChange={(e) => setUserRef(e.target.value)} />
                    <label>Password</label>
                    <input type="password" className="loginInput" placeholder="Enter password..." value={passwordRef}
                        onChange={(e) => setPasswordRef(e.target.value)} />
                    <button className="loginButton" type="submit">
                        submit
                    </button>
                </form>
                <p id="or">or</p>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Sign Up</Link>
                </button>
            </div>
        </>
    )
}