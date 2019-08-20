import React from 'react';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="MFlix">
                <h2>MFlix</h2>
            </div>
            <div className="Login">
                <h4>Login</h4>
                <h4>Sign up</h4>
            </div>
        </div>
    );
}