import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header" role="banner">
            <nav className="left" role="navigation">
                <div className="visual">visual</div>
                {/* <div className="about">
                    <Link to="/">about</Link>
                </div>
                <div className="works">
                    <Link to="/">works</Link>
                </div>
                <div className="skills">
                    <Link to="/">skills</Link>
                </div>
                <div className="playground">
                    <Link to="/">playground</Link>
                </div>
                <div className="contact">
                    <Link to="/">contact</Link>
                </div> */}
            </nav>
            <nav className="right" role="navigation">
                <div className="comment">
                    <Link to="/">comment</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
