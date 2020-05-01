import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
    return (
        <>
            <ul>
                <Link to="/"><li><a class="active" href="/">Back To Login</a></li></Link>
            </ul>
            <div style={{ textAlign: "center" }}>
                <div className="card" style={{ marginTop: "5%" }}>
                    <img src={window.location.origin + '/user.png'} alt="John" style={{ width: "100%" }} />
                    <h1>User Name</h1>
                    <p class="title">CEO & Founder, Example</p>
                    <p>Modal University</p>
                    <p><button className="contact-button">Contact</button></p>
                </div>
            </div>
        </>
    )
}

export { Home };