import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
            <div className="navbar">
                StayHealthy <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-doctor-vector-icon-png-image_3723556.jpg" height="26" width="26"/>
            </div>

            <ul className="navlinks">
                <li className="home">
                    <Link to="/">Home</Link>
                </li>
                <li className="appt">
                    <Link to="/Appointments">Appointments</Link>
                </li>
                
                <li className="signup">
                    <Link to="/Sign_Up">
                        Sign Up
                    </Link>
                </li>
                <li className="login">
                    <Link to="/Login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
