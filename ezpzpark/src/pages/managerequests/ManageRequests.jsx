import "./managerequests.css";
import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import useFetch from '../../useFetch';
//import Data from "../../requestTable.json"

//code from 'the net ninja' full react tutorial 16-31
//https://www.youtube.com/watch?v=qdCHEUaFhBk&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=17
export default function ManageRequests() {
    const { data: parkingRequests, isPending, error } = useFetch('http://localhost:8000/requestsTable');
    const [optionChoice, setOptionChoice] = useState('');

    const handleAcceptClick=(e)=>{
        //code from https://www.youtube.com/watch?v=5VCY9yCZnlc

        //search for specific entry
        fetch('http://localhost:8000/requestsTable/'+optionChoice)
        .then(function(response) {
            return response.json();
        }).then(function (obj) {
            fetch('http://localhost:8000/acceptedRequestsTable', {
                method: 'POST',
                headers:{ "Content-Type": "application/json"},
                body: JSON.stringify(obj)
            }).then(() => {
                console.log('added an accepted request');
                handleDenyClick();  //call deny click to delete object
            })
         }).catch(function (error) {
            console.error('could not retrieve');
            console.error(error);
        })
    }

    const handleDenyClick=(e)=>{
        fetch('http://localhost:8000/requestsTable/'+optionChoice, {
            method: 'DELETE'
        }).then(() => {
            console.log('deleted');
            window.location.reload();
        })
    }

    return (
        <>
            <div className="managerequests">
                <span className="manageRequestTitle">Manage Parking Requests</span>
                                
                <div className="requestForm">

                    <p className="requestText">Parking requests</p>

                    {/*https://www.youtube.com/watch?v=4fCr1IepJRw by webStylePress was used to write this code*/}
                    <select required className="spaceBox" name="spaces" id="spaces" value={optionChoice} 
                        onChange={(e) => setOptionChoice(e.target.value)}>

                        {parkingRequests && parkingRequests.map(options => {
                            return(
                                <>
                                    <option name="ParkingRequest" value={options.id}>{options.optionChoice}, {options.dateTime}, {options.duration}</option>
                                </>
                            )
                        }) }
                    </select>



                    <div className="buttons">
                        <button className="submitButton" type="submit"  onClick={handleAcceptClick}  >Accept</button>
                        <button className="submitButton"   type="submit"  onClick={handleDenyClick}    >Deny</button>
                    </div>
                </div>
                                
                <button className="manageRequestReturnButton">
                    <Link className="link" to="/admindash">Return to Dashboard</Link>
                </button>

            </div>
        </>
    );
}