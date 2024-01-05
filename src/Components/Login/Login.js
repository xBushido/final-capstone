import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <div className="container">
        <div className="login-text">
            <h1>Login</h1>
        </div>

        <div className="login-text1">
            Are you a new member?<a style={{ color: "#4E4187" }}> Sign Up Here</a>
        </div>

        <div className="login-form">
            <form>
                <div className="form-group">
                    <label HTMLfor="email">Email</label>
                    <input type="email" required className="form-control" placeholder="Enter your email"/>
                </div>
                <div className="form-group">
                    <label HTMLfor="password">Password</label>
                    <input type="password" required className="form-control" placeholder="Enter your password"/>
                </div>
                
                <div className="buttons">
                    <button type="submit" className="button-sub">Submit</button>
                    <button type="reset" className="button-res">Reset</button>
                </div>
                <br />
                <div className="frgt-text">
                    Forgot Password?
                </div>
            </form>
        </div>
    </div>
    );
}

export default Login;