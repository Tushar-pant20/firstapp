import React from "react";
import "./navbar.css";

const Navbar = () =>{
    return ( 
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>T</span>ushar
                        <span> P</span>ant
                    </h2>
                </div>

                <div className="menu-link">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>


            <section className="hero-section">  
                <p>Welcome to my first react webpage</p>
                <button className="btn">Order Now</button>
            </section>
        </>
    )
}

export default Navbar;