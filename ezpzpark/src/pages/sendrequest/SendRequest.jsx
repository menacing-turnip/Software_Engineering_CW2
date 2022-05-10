import "./sendrequest.css";

export default function SendRequest() {

    return (
        <>
            <div className="sendrequest">
                <p>THIS PAGE IS WHERE THE DRIVER CAN REQUEST A PARKING SPACE</p>
                <p>THE WAY I VISUALISE THIS WORKING IS THE USER SELECTS A PARKING LOT</p>
                <p>FROM A DROPDOWN MENU OF AVAILABLE PARKING LOTS BY 'READING' FROM A</p>
                <p>CSV CONTAINING ALL AVAILABLE PARKING LOTS</p>
                <p>CSV NAME: parkingLotsTable.csv</p>
                <p>CSV COLUMNS: parkingLotName, availableSpaces</p>
                <p>AND THEN THE SYSTEM 'WRITES' THE REQUEST TO AN OUTPUT CSV</p>
                <p>CSV NAME: requestTable.csv</p>
                <p>CSV COLUMNS: username, parkingLotName, timeOfRequest</p>
                <p>ADMIN USERS CAN THEN 'READ' FROM THIS CSV ON THE ManageRequests PAGE</p>
            </div>
        </>
    );
}