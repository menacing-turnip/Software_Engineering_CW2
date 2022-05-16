import "./driverdash.css";
import { Link } from "react-router-dom"

export default function DriverDash() {

    return (
        <>
            <div className="driverdash">
                <span className="driverDashTitle">Driver Dashboard</span>
                <button className="driverDashButton">
                    <Link className="link" to="/sendrequest">Send Parking Request</Link>
                </button>
                <button className="driverDashButton">
                    <Link className="link" to="/payments">Make A Payment</Link>
                </button>
            </div>
        </>
    );
}