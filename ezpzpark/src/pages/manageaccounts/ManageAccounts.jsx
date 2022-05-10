import "./manageaccounts.css";

export default function ManageAccounts() {

    return (
        <>
            <div className="manageaccounts">
                <p>THIS PAGE IS WHERE ADMIN USERS CAN ADD/REMOVE USERS</p>
                <p>FROM userTable.csv BY 'WRITING' TO THE CSV</p>
                <p>GOOGLE "react app how to read/write to csv"</p>
                <p>YOU COULD IMPLEMENT THIS BY 'READING' FROM userTable.csv TO POPULATE</p>
                <p>A TABLE WITH A "remove" BUTTON NEXT TO EACH ROW AND A FORM AT THE BOTTOM</p>
                <p>OF THE PAGE FOR username AND password WITH AN "add user" BUTTON</p>
            </div>
        </>
    );
}