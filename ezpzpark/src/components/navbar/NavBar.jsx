import { Link } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function StickyBar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className="sticky">
            <div className="stickyLeft">
                <i className="stickyIcon fa-brands fa-facebook"></i>
                <i className="stickyIcon fa-brands fa-twitter-square"></i>
                <i className="stickyIcon fa-brands fa-pinterest"></i>
                <i className="stickyIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="stickyCenter">
                <ul className="stickyList">
                    <li className="stickyListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="stickyListItem"><Link className="link" to="/">ABOUT US</Link></li>
                    <li className="stickyListItem"><Link className="link" to="/write">BOOK A PARKING SPACE</Link></li>
                    <li className="stickyListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="stickyRight">
                {
                    user ? (
                        user[0] !== null ?
                            <Link to="/settings">
                                <img
                                    className="stickyImage"
                                    src={user[0].profilepic}
                                    alt=""
                                /></Link> :
                            <Link to="/settings">
                                <img
                                    className="stickyImage"
                                    src=""
                                    alt=""
                                /></Link>
                    ) : (
                        <ul className="stickyList">
                            <li className="stickyListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="stickyListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }

                <i className="stickySearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}