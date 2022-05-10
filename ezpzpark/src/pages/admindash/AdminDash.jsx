import "./admindash.css";
import { Link } from "react-router-dom"

export default function AdminDash() {

    return (
        <>
            <div className="admindash">
                <span className="adminDashTitle">Admin Dashboard</span>
                <button className="adminDashButton">
                    <Link className="link" to="/parkinglots">Manage Parking Lots</Link>
                </button>
                <button className="adminDashButton">
                    <Link className="link" to="/manageaccounts">Manage User Accounts</Link>
                </button>
                <button className="adminDashButton">
                    <Link className="link" to="/managerequests">Manage Parking Requests</Link>
                </button>
                <button className="adminDashButton">
                    <Link className="link" to="/adminregister">Register New Administrator Account</Link>
                </button>
            </div>
        </>
    );
}