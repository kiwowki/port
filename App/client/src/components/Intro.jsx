import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { introImg } from "../constants";
// import RepleArea from "./reple/RepleArea";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
    const titleT1Ref = useRef(null);
    const titleT2Ref = useRef([]);

    // OS를 확인하는 함수
    const getOperatingSystem = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (userAgent.includes("win")) return "windows";
        if (userAgent.includes("mac")) return "mac";
        return "unknown";
    };

    // 운영체제에 따라 다른 CSS를 반환하는 함수
    const getOsSpecificStyles = () => {
        const os = getOperatingSystem();

        if (os === "mac") {
            return {
                title_t1: {
                    paddingTop: "0.7vw",
                    lineHeight: "0.9",
                },
                title_t2: {
                    paddingTop: "0.7vw",
                    lineHeight: "0.9",
                },
            };
        } else {
            // 윈도우 버전에 대한 스타일 설정
            return {
                title_t1: {
                    // 윈도우 버전에 대한 스타일 설정
                },
                title_t2: {
                    // 윈도우 버전에 대한 스타일 설정
                },
            };
        }
    };

    useEffect(() => {
        // intro 배경 3D
        const starsIntro = document.getElementById("stars_intro");
        const starsCtxIntro = starsIntro.getContext("2d");

        let screenIntro, starsElementsIntro;
        const starsParams = { speed: 2, number: 300, extinction: 4 };

        setupStars(starsIntro, starsCtxIntro);
        updateStars(starsIntro, starsCtxIntro);

        window.onresize = function () {
            setupStars(starsIntro, starsCtxIntro);
        };

        function Star(x, y, z) {
            this.x = x || Math.random() * starsIntro.width;
            this.y = y || Math.random() * starsIntro.height;
            this.z = z || Math.random() * starsIntro.width;

            this.move = function () {
                this.z -= starsParams.speed;
                if (this.z <= 7) {
                    this.z = starsIntro.width;
                }
            };

            this.show = function (ctx) {
                let x, y, rad, opacity;
                x = (this.x - screenIntro.c[0]) * (ctx.canvas.width / this.z);
                x = x + screenIntro.c[0];
                y = (this.y - screenIntro.c[1]) * (ctx.canvas.width / this.z);
                y = y + screenIntro.c[1];
                rad = ctx.canvas.width / this.z;
                opacity =
                    rad > starsParams.extinction
                        ? 1.5 * (2 - rad / starsParams.extinction)
                        : 1;

                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
                ctx.arc(x, y, rad, 0, Math.PI * 2);
                ctx.fill();
            };
        }

        function setupStars(stars, starsCtx) {
            const screen = {
                w: window.innerWidth,
                h: window.innerHeight,
                c: [window.innerWidth * 0.5, window.innerHeight * 0.5],
            };
            window.cancelAnimationFrame(updateStars);
            stars.width = screen.w;
            stars.height = screen.h;

            if (stars === starsIntro) {
                screenIntro = screen;
                starsElementsIntro = [];
                for (let i = 0; i < starsParams.number; i++) {
                    starsElementsIntro[i] = new Star();
                }
            }
        }

        function updateStars(stars, starsCtx) {
            starsCtx.fillStyle = "black";
            starsCtx.fillRect(0, 0, stars.width, stars.height);

            starsElementsIntro.forEach(function (s) {
                s.show(starsCtx);
                s.move();
            });

            window.requestAnimationFrame(() => updateStars(stars, starsCtx));
        }
    }, []);

    useEffect(() => {
        gsap.set(
            ".intro_title .title .title_t1, .intro_title .title .title_t2",
            { overflow: "hidden" }
        );
        gsap.set(".intro_title .title .title_t1 p", {
            opacity: 0,
            y: 100,
            z: -1000,
        });
        gsap.set(".intro_title .title .title_t2 p", {
            opacity: 0,
            y: -100,
            z: -1000,
        });
        gsap.set(".images_wrap .flip-container", { opacity: 0, scale: 2.5 });
        gsap.set("#header", { y: -500 });

        let imageElements = document.querySelectorAll(
            ".images_wrap .flip-container"
        );
        let shuffledImages = Array.from(imageElements).sort(
            () => Math.random() - 0.5
        );

        setTimeout(() => {
            let tl = gsap.timeline();

            tl.to(
                ".intro_title .title .title_t1 p, .intro_title .title .title_t2 p",
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
                "a"
            );
            tl.to(shuffledImages, {
                duration: 0.2,
                opacity: 1,
                scale: 1,
                stagger: 0.2,
            });
            tl.to("#header", { duration: 1.2, y: 0 });
        }, 2000);

        const flipCard = (element) => {
            const flipper = element.querySelector(".flipper");
            flipper.style.transform =
                flipper.style.transform === "rotateY(180deg)"
                    ? "rotateY(0deg)"
                    : "rotateY(180deg)";
        };

        document.querySelectorAll(".flip-container").forEach((element) => {
            element.addEventListener("click", () => flipCard(element));
        });
    }, []);

    return (
        <section id="intro">
            <canvas className="stars-canvas" id="stars_intro"></canvas>
            <h2 className="blind">intro</h2>
            <div className="intro_title">
                <div className="title">
                    <div className="title_t1" ref={titleT1Ref}>
                        <p
                            className="split"
                            style={getOsSpecificStyles().title_t1}
                        >
                            VISUAL
                        </p>
                    </div>
                    <div className="images_wrap">
                        {introImg.map((text, index) => {
                            return (
                                <div
                                    className={`img${index + 1} flip-container`}
                                    key={index}
                                >
                                    <div className="flipper">
                                        <div className="front">
                                            <img
                                                src={text.src}
                                                alt={`intro_${index + 1}`}
                                            />
                                        </div>
                                        <div className="back">
                                            <p>{text.back}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="title_t2" ref={titleT2Ref}>
                        <p
                            className="split"
                            style={getOsSpecificStyles().title_t2}
                        >
                            STORIES
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
