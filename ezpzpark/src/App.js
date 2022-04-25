import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

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
            </Routes>
        </Router>
    );
}

export default App;
