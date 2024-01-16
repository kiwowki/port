import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import gsap from "gsap";

import ContactImg from "../assets/img/profile-min.jpg";
import RepleArea from "./reple/RepleArea";

import { ContactTop } from "../constants/index";

const Contact = () => {
    // useEffect(() => {
    //     function adjustContactSize() {
    //         gsap.to(".contact_wrap .mid .img_wrap", {
    //             width: "53%",
    //             scrollTrigger: {
    //                 trigger: "#contact",
    //                 start: "top bottom",
    //                 end: "bottom bottom",
    //                 scrub: 0.5,
    //             },
    //         });
    //     }

    //     window.addEventListener("load", adjustContactSize);
    // }, []);

    return (
        <section id="contact">
            <h2 className="blind">contact</h2>
            <div className="contact_wrap">
                {/* <div className="top">
                    <h2>
                        <p>LET’S</p>
                        <p>DEVELOP</p>
                    </h2>
                    <h2>EXCEPTIONAL</h2>
                </div> */}
                <div className="contact_text_top">
                    {ContactTop.map((text, index) => {
                        return (
                            <div
                                className={`text t${index + 1} split`}
                                key={index}
                            >
                                {text}
                            </div>
                        );
                    })}
                </div>
                <div className="mid">
                    <div className="img_wrap">
                        <img src={ContactImg} alt="KangSeohyeon_photo" />
                    </div>
                    <div className="reple_area">
                        <RepleArea />
                    </div>
                </div>
                {/* <div className="mid">
                    <div className="img_wrap">
                        <img src={ContactImg} alt="KangSeohyeon_photo" />
                        <h2>
                            <p>
                                COMMENT
                            </p>
                        </h2>
                    </div>
                    <h2>
                        <p>SOLUTIONS</p>
                    </h2>
                </div> */}
                <div className="bot">
                    <Link to="#" id="goTop" className="top_button">
                        GO TOP
                    </Link>
                    <div className="text">SEND ME A MESSAGE:</div>
                    <Link to="mailto:wolves941110@gmail.com" className="mail">
                        wolves941110@gmail.com
                    </Link>
                </div>
                <div className="sns">
                    <span>
                        <Link to="#">WORDPRESS</Link>MY WORKS 2023
                    </span>
                    <span>
                        <Link to="#">NOTION</Link>WORKS DESCRIPTION
                    </span>
                    <span>
                        <Link to="#">GITHUB</Link>MARKDOWN, CODE
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Contact;
