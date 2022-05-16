import "./home.css";
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
    
    return (
        <>
            
            <div className="home">
                <span className="homeTitle">EZPZ Parking Management System</span>
                <button className="userButton">
                    <Link className="link" to="/login">User Sign In</Link>
                </button>
                <p>or</p>
                <button className="adminButton">
                    <Link className="link" to="/adminlogin">Admin Tools</Link>
                </button>
            </div>
        </>
    );
}