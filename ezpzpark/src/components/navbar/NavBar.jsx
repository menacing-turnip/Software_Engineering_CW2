import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function NavBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="nav">
            <div className="navLeft">
                <i className="navIcon fa-brands fa-facebook"></i>
                <i className="navIcon fa-brands fa-twitter-square"></i>
                <i className="navIcon fa-brands fa-pinterest"></i>
                <i className="navIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="navListItem"><Link className="link" to="/">ABOUT US</Link></li>
                </ul>
            </div>
            <div className="navRight">
                
            </div>
        </div>
    )
}