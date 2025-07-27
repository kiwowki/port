import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
    return (
        <header id="header" role="banner">
            <nav className="left" role="navigation">
                <ScrollLink to="t1" smooth={true} duration={500} className="visual">
                    visual
                </ScrollLink>
            </nav>
            <nav className="right" role="navigation">
                <ScrollLink to="reple_list" smooth={true} duration={500} className="comment">
                    comment
                </ScrollLink>
            </nav>
        </header>
    );
};

export default Header;
