import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav>
        <div className="navbar">
            StayHealthy <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-doctor-vector-icon-png-image_3723556.jpg" height="26" width="26"/>
        </div>

        <ul className="navlinks">
            <li class="home">
                Home
            </li>
            <li className="appt">
                Appointments
            </li>
            <li className="signup">
                <a href="../Sign_Up//Sign_Up.html">
                SignUp
                </a>
            </li>
            <li className="login">
                <a href="../Login//Login.html">
                Login
                </a>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;