import "./parkinglots.css";

export default function ParkingLots() {

    return (
        <>
            <div className="parkinglots">
                <p>THIS PAGE IS WHERE ADMIN USERS CAN ADD/REMOVE PARKING LOTS</p>
                <p>AND BLOCK/RESERVE PARKING SPACES</p>
                <p>THE WAY I VISUALISE THIS WORKING IS THE ADMIN SELECTS A PARKING LOT</p>
                <p>FROM A DROPDOWN MENU OF AVAILABLE PARKING LOTS BY 'READING' FROM A</p>
                <p>CSV CONTAINING ALL AVAILABLE PARKING LOTS</p>
                <p>CSV NAME: parkingLotsTable.csv</p>
                <p>CSV COLUMNS: parkingLotName, availableSpaces, blockedSpaces</p>
                <p>AND THEN THE SYSTEM 'WRITES' TO THE CSV IF THE ADMIN CLICKS A "add parking lot" BUTTON?</p>
                <p>OR UPDATES THE "blockedSpaces" COLUMN IF A SPACE IS </p>
                <p>RESERVED OR BLOCKED (IF WE'RE FEELING LAZY THOSE TWO ARE THE SAME THING)</p>
            </div>
        </>
    );
}