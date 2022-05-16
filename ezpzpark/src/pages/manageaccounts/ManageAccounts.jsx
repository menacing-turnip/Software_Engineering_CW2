import "./manageaccounts.css";
import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";
import useFetch from '../../useFetch';
import { useNavigate } from 'react-router-dom'

export default function ManageAccounts() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [csvFile, setCsvFile] = useState();

    const newUser = { username, email, password };
    const { data } = useFetch('http://localhost:8000/userTable');
    const [selectedUser, setSelectedUser] = useState('');
    const [successAdd, setSuccessAdd] = useState(false);
    const [successDel, setSuccessDel] = useState(false);
    const [delUsername, setDelUsername] = useState("");
    const navigate = useNavigate();

    const handleAddUser = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            {/*THIS IS WHERE YOU WOULD WRITE TO CSV userTable - CODE IT IF YOU CAN!*/ }
            fetch('http://localhost:8000/userTable', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            }).then(() => {
                console.log('added a request');
                //setTimeout(() => { navigate('/manageaccounts'); }, 1000);
                setTimeout(() => { window.location.reload(); }, 1000);
                setSuccessAdd(true);
            })
        } catch (err) {
            setError(true);
        }
    };

    const handleDeleteUser = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            {/*THIS IS WHERE YOU WOULD WRITE TO CSV userTable - CODE IT IF YOU CAN!*/ }
            data.forEach(function (user) {
                if (user.username === delUsername) {
                    fetch('http://localhost:8000/userTable/' + user.id, {
                        method: 'DELETE'
                    }).then(() => {
                        console.log('deleted');
                        //setTimeout(() => { navigate('/manageaccounts'); }, 1000);
                        setTimeout(() => { window.location.reload(); }, 1000);
                        setSuccessDel(true);
                    })
                }
            })
        } catch (err) {
            setError(true);
            { error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span> }
        }
    };

    return (
        <>
            {/*<div className="manageaccounts">
                <p>THIS PAGE IS WHERE ADMIN USERS CAN ADD/REMOVE USERS</p>
                <p>FROM userTable.csv BY 'WRITING' TO THE CSV</p>
                <p>GOOGLE "react app how to read/write to csv"</p>
                <p>YOU COULD IMPLEMENT THIS BY 'READING' FROM userTable.csv TO POPULATE</p>
                <p>A TABLE WITH A "remove" BUTTON NEXT TO EACH ROW AND A FORM AT THE BOTTOM</p>
                <p>OF THE PAGE FOR username AND password WITH AN "add user" BUTTON</p>
                </div>*/}

            <div className="register">
                <span className="registerTitle">Add User</span>
                <form className="registerForm" onSubmit={handleAddUser}>
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

                {successAdd && <span style={{ color: "red", marginBottom: "10px" }}>User Added!</span>}
                {successDel && <span style={{ color: "red", marginTop: "10px" }}>User Deleted!</span>}
                {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}

                <span className="registerTitle">Delete User</span>
                <form className="registerForm" onSubmit={handleDeleteUser}>
                    <label>Username</label>
                    <input
                        type="text"
                        className="registerInput"
                        placeholder="Enter username..."
                        onChange={(e) => setDelUsername(e.target.value)}
                    />
                    <button className="registerButton" type="submit">
                        Submit
                    </button>
                </form>

                <button className="manageAccountsReturnButton">
                    <Link className="link" to="/admindash">Return to Dashboard</Link>
                </button>

                

                {/*THIS IS WHAT A COMMENT LOOKS LIKE IN JSX!*/}
                
            </div>




        </>
    );
}