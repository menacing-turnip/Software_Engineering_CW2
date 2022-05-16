import "./parkinglots.css";
import axios from "axios";
import React, { useState } from "react"
import { Link } from "react-router-dom"
import useFetch from '../../useFetch';
import { useNavigate } from 'react-router-dom';

export default function ParkingLots() {

    const { data: parkingLots, isPending, error } = useFetch('http://localhost:8000/parkingLotsTable');
    const [optionChoice, setOptionChoice] = useState('');
    const [duration, setDuration] = useState(60);
    const [dateTime, setDateTime] = useState('');
    const [requestSent, setRequestSent] = useState(false);
    const navigate = useNavigate();

    //code that helped this function:
    //https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date#:~:text=var%20myDateString%3B%20MyDate.-,setDate(MyDate.,('0'%20%2B%20MyDate.
    const handleSubmit = (e) => {
        e.preventDefault();

        var MyDate = new Date();
        var timeString;
        var myDateString;

        //Getting current date and time in correct format
        //notation:     year-month-dayThour:minutes
        timeString = MyDate.toLocaleTimeString();
        timeString = timeString.slice(0, -3);
        myDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + ('0' + MyDate.getDate()).slice(-2) + "T" + timeString;

        //creating userRequest variable
        const userRequest = { optionChoice, myDateString, dateTime, duration };

        console.log(userRequest);

        //POST-Request (write to json)
        fetch('http://localhost:8000/requestsTable', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userRequest)
        }).then(() => {
            console.log('added a request');
            setRequestSent(true);
            setTimeout(() => { navigate('/driverdash'); }, 1000);
        })
    }

    return (
        <>
            <div className="parkinglots">
                {/*<p>THIS PAGE IS WHERE ADMIN USERS CAN ADD/REMOVE PARKING LOTS</p>
                <p>AND BLOCK/RESERVE PARKING SPACES</p>
                <p>THE WAY I VISUALISE THIS WORKING IS THE ADMIN SELECTS A PARKING LOT</p>
                <p>FROM A DROPDOWN MENU OF AVAILABLE PARKING LOTS BY 'READING' FROM A</p>
                <p>CSV CONTAINING ALL AVAILABLE PARKING LOTS</p>
                <p>CSV NAME: parkingLotsTable.csv</p>
                <p>CSV COLUMNS: parkingLotName, availableSpaces, blockedSpaces</p>
                <p>AND THEN THE SYSTEM 'WRITES' TO THE CSV IF THE ADMIN CLICKS A "add parking lot" BUTTON?</p>
                <p>OR UPDATES THE "blockedSpaces" COLUMN IF A SPACE IS </p>
                <p>RESERVED OR BLOCKED (IF WE'RE FEELING LAZY THOSE TWO ARE THE SAME THING)</p>*/}
                
                <span className="parkingTitle">Manage Parking Lots</span>
                <div className="requestForm">
                    <p className="requestText">Choose a parking lot</p>
                    <form onSubmit={handleSubmit}>

                        {/*https://www.youtube.com/watch?v=4fCr1IepJRw by webStylePress was used to write this code*/}
                        <select required className="spaceBox" name="spaces" id="spaces" value={optionChoice} 
                        onChange={(e) => setOptionChoice(e.target.value)}>
                            
                            { parkingLots && parkingLots.map(options => {
                                return(
                                    <>
                                        <option name="Parkinglot" value={options.name}>{options.name}</option>
                                    </>
                                )
                            }) }
                        </select>
                    </form>
                    <input className="submitButton" type="submit"></input> 
                </div>
                
                


                <button className="parkingReturnButton">
                    <Link className="link" to="/admindash">Return to Dashboard</Link>
                </button>


            </div>
        </>
    );
}