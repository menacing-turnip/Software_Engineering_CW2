import "./payments.css";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useFetch from '../../useFetch';

export default function Payments() {
    const [balance, setBalance] = useState("");
    const { data, isPending, error } = useFetch('http://localhost:8000/acceptedRequestsTable');
    const [paid, setPaid] = useState(false);
    const user = localStorage.getItem('user');
    var total = 0;
    try {
        data.forEach(function (request) {
            if (request.user === user) {
                total = total + (request.duration * 2);
            }
        });
    } catch (error) {
        console.log('payments failed');
    };
    
    const handleSubmit = (e) => {
        setBalance(0);
        setPaid(true);
    }

    return (
        <>
            <div className="payments">
                <span className="paymentTitle">Payments</span>
                {paid && <p className="outstandingBalance">Outstanding Balance: {total}</p>}
                {!paid && <p className="outstandingBalance">Outstanding Balance: {total}</p>}
                
                <form className="paymentForm" onSubmit={handleSubmit}>
                    <button className="paymentButton" type="submit">
                        Pay
                    </button>
                </form>

                {/*<p>THIS PAGE IS WHERE THE DRIVER CAN PAY THEIR OUTSTANDING BALANCE</p>
                <p>THE WAY I VISUALISE THIS WORKING IS THE SYSTEM DISPLAYS OUTSTANDING</p>
                <p>BALANCE BY 'READING' FROM A</p>
                <p>CSV CONTAINING USERS INFO (same one used for registration and login)</p>
                <p>CSV NAME: userTable.csv</p>
                <p>CSV COLUMNS: userName, password, outstandingBalance</p>
                <p>THE PAGE WILL HAVE AN INPUT FIELD "amountToPay" AND A PAY BUTTON</p>
                <p>THEN THE SYSTEM 'WRITES' TO THE userTable CSV UPDATING THE outstandingBalance</p>
                <p>WITH THE VALUE OF (amountToPay - outstandingBalance)</p>*/}

                <button className="paymentReturnButton">
                    <Link className="link" to="/driverdash">Return to Dashboard</Link>
                </button>


            </div>
        </>
    );
}