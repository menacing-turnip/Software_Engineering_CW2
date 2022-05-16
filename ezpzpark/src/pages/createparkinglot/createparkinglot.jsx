import "./createparkinglot.css";
import { Link } from "react-router-dom"
import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

//code from 'the net ninja' full react tutorial 16-31
//https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
export default function CreateParkingLot() {
    const[noOfSpaces, setNoOfSpaces] = useState('');
    const [name, setName] = useState('');
    const [successAdd, setSuccessAdd] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();

        var newParkingLot = {name, noOfSpaces}

        //POST-Request (write to json)
        fetch('http://localhost:8000/parkingLotsTable', {
            method: 'POST',
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(newParkingLot)
        }).then(() => {
            console.log('added a request');
            setTimeout(() => { window.location.reload(); }, 1000);
            setSuccessAdd(true);
            //setTimeout(() => {   navigate('/driverdash'); }, 1000);
        })

    }


    return (
        <>
            <div className="parkingwrap">
                <span className="parkingTitle">Create Parking Lot</span>
                <form onSubmit={handleSubmit}>
                    <label className="pnamelabel">name of parking lot</label>
                    <input className="pnamebox" value={name} type="text" onChange={(e) => setName(e.target.value)}></input>

                    <label className="pspacelabel">number of spaces</label>
                    <input className="pspacebox" value={noOfSpaces} type="number" onChange={(e) => setNoOfSpaces(e.target.value)}></input>
                    <button className="createButton" type="submit">
                        Create parking lot
                    </button>
                </form>
                {successAdd && <span style={{ color: "red", marginBottom: "10px" }}>Carpark Added!</span>}

                <button className="parkingReturnButton">
                    <Link className="link" to="/admindash">Return to Dashboard</Link>
                </button>
            </div>
        </>
    );
}