import React from 'react';
import "./Sign_Up.css";

const SignUp = () => {
    return (
        <div className="container">
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>

            <div className="signup-text1">
                Already a Member? <a style={{ color: "#4E4187" }}> Login</a>
            </div>

            <div className="signup-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" name="phone" id="phone"required className="form-control" placeholder="Enter your phone number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"required className="form-control" placeholder="Enter your email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password"/>
                    </div>
                    
                    <div className="buttons">
                        <button type="submit" className="button-sub">Submit</button>
                        <button type="reset" className="button-res">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
