import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import AdminLogin from "./pages/adminlogin/AdminLogin";
import DriverDash from "./pages/driverdash/DriverDash";
import AdminDash from "./pages/admindash/AdminDash";
import SendRequest from "./pages/sendrequest/SendRequest";
import Payments from "./pages/payments/Payments";
import Messages from "./pages/messages/Messages";
import ParkingLots from "./pages/parkinglots/ParkingLots";
import ManageAccounts from "./pages/manageaccounts/ManageAccounts";
import ManageRequests from "./pages/managerequests/ManageRequests";
import AdminRegister from "./pages/adminregister/AdminRegister";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
    const { user } = useContext(Context);
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />

                <Route path="/adminlogin" element={<AdminLogin />} />

                <Route path="/driverdash" element={<DriverDash />} />

                <Route path="/admindash" element={<AdminDash />} />

                <Route path="/sendrequest" element={<SendRequest />} />

                <Route path="/payments" element={<Payments />} />

                <Route path="/messages" element={<Messages />} />

                <Route path="/parkinglots" element={<ParkingLots />} />

                <Route path="/manageaccounts" element={<ManageAccounts />} />

                <Route path="/managerequests" element={<ManageRequests />} />

                <Route path="/adminregister" element={<AdminRegister />} />
            </Routes>
        </Router>
    );
}

export default App;
