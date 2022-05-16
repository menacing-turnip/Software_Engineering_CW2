import "./sendrequest.css";
import { Link } from "react-router-dom";
//import Data from "../../parkingLotTable.json"
import React, { useState } from "react";
import useFetch from '../../useFetch';
import { useNavigate } from 'react-router-dom';

//code from 'the net ninja' full react tutorial 16-31
//https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17

export default function SendRequest() {

    const { data: parkingLots, isPending, error } = useFetch('http://localhost:8000/parkingLotsTable');
    const [optionChoice, setOptionChoice] = useState('');
    const [duration, setDuration] = useState(60);
    const [dateTime, setDateTime] = useState('');
    const [requestSent, setRequestSent] = useState(false);
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    //code that helped this function:
    //https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date#:~:text=var%20myDateString%3B%20MyDate.-,setDate(MyDate.,('0'%20%2B%20MyDate.
    const handleSubmit=(e)=>{
        e.preventDefault();

        var MyDate = new Date();
        var timeString;
        var myDateString;

        //Getting current date and time in correct format
        //notation:     year-month-dayThour:minutes
        timeString = MyDate.toLocaleTimeString();
        timeString = timeString.slice(0, -3);
        myDateString = MyDate.getFullYear() + '-' + ('0' + (MyDate.getMonth()+1)).slice(-2) +'-'+ ('0' + MyDate.getDate()).slice(-2)+"T"+timeString;

        //creating userRequest variable
        const userRequest = {user, optionChoice, myDateString, dateTime, duration};

        console.log(userRequest);

        //POST-Request (write to json)
        fetch('http://localhost:8000/requestsTable', {
            method: 'POST',
            headers:{ "Content-Type": "application/json"},
            body: JSON.stringify(userRequest)
        }).then(() => {
            console.log('added a request');
            setRequestSent(true);
            setTimeout(() => {   navigate('/driverdash'); }, 1000);
        })
    }

    return (
        <>
            <div className="sendrequest">
                <span className="sendRequestTitle">Send a request</span>
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
                        <label>Input the duration of your reservation in minutes</label>
                        <input
                            type="number"
                            required
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        />
                        <input
                            type="datetime-local"
                            required
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                        {!requestSent && <button className="submitButton" type="submit">Submit</button>}
                        {requestSent && <button className="submitButton" type="submit">Submitted</button> }
                    </form>



                </div>
                <button className="sendRequestReturnButton">
                    <Link className="link" to="/driverdash">Return to Dashboard</Link>
                </button>
            </div>
        </>
    );
}