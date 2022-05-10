import "./payments.css";

export default function Payments() {

    return (
        <>
            <div className="payments">
                <p>THIS PAGE IS WHERE THE DRIVER CAN PAY THEIR OUTSTANDING BALANCE</p>
                <p>THE WAY I VISUALISE THIS WORKING IS THE SYSTEM DISPLAYS OUTSTANDING</p>
                <p>BALANCE BY 'READING' FROM A</p>
                <p>CSV CONTAINING USERS INFO (same one used for registration and login)</p>
                <p>CSV NAME: userTable.csv</p>
                <p>CSV COLUMNS: userName, password, outstandingBalance</p>
                <p>THE PAGE WILL HAVE AN INPUT FIELD "amountToPay" AND A PAY BUTTON</p>
                <p>THEN THE SYSTEM 'WRITES' TO THE userTable CSV UPDATING THE outstandingBalance</p>
                <p>WITH THE VALUE OF (amountToPay - outstandingBalance)</p>
            </div>
        </>
    );
}