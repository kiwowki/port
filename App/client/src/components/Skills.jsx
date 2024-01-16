import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

import { PersonalityText } from "../constants/index";
// import { skillText } from "../constants/index";

const Skills = () => {
    useEffect(() => {
        // personality_main GSAP 애니메이션
        const pertl = gsap.timeline({
            scrollTrigger: {
                trigger: ".personality_main",
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });

        pertl
            .fromTo(
                ".personality_main .t1",
                {
                    opacity: 0,
                    x: "10vw",
                },
                {
                    opacity: 1,
                    x: "0",
                }
            )
            .fromTo(
                ".personality_main .t2",
                {
                    opacity: 0,
                    x: "10vw",
                },
                {
                    opacity: 1,
                    x: "0",
                }
            )
            .fromTo(
                ".personality_main .t3",
                {
                    opacity: 0,
                    x: "10vw",
                },
                {
                    opacity: 1,
                    x: "0",
                }
            )
            .fromTo(
                ".personality_main .t4",
                {
                    opacity: 0,
                    x: "10vw",
                },
                {
                    opacity: 1,
                    x: "0",
                }
            )
            .fromTo(
                ".personality_main .t5",
                {
                    opacity: 0,
                    x: "10vw",
                },
                {
                    opacity: 1,
                    x: "0",
                }
            );
        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".personality_wrap",
            start: "top center",
            end: "bottom center",
            animation: pertl,
            scrub: true,
        });
        return () => {
            ScrollTrigger.getAll().forEach((ST) => ST.kill());
        };
    });

    return (
        <section id="skills">
            <h2 className="blind">skills</h2>
            <div className="skills_wrap">
                <div className="personality_wrap">
                    <div className="personality_top">
                        SOME ASPECTS OF
                        <br /> MY PERSONALITY
                    </div>
                    <div className="personality_main">
                        {PersonalityText.map((personality, index) => (
                            <div
                                key={`t${index + 1}`}
                                className={`t${index + 1}`}
                            >
                                {personality.eng}
                                <span>{personality.kor}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="skillSet_wrap">
                    <div className="skillSet_top">
                        MORE ABOUT MY SKILL SET
                        <br />
                        AND THINGS I LIKE
                        <br />
                    </div>
                    <div className="skillSet_main">
                        <div className="top">
                            <div className="left">
                                <div className="h3">key</div>
                            </div>
                            <div className="mid">
                                <div className="h3">html/css</div>
                                <div className="h3">javascript</div>
                                <div className="h3">react</div>
                                <div className="h3">php</div>
                                <div className="h3">node.js</div>
                                <div className="h3">vue.js</div>
                                <div className="h3">next.js</div>
                            </div>
                            <div className="right">
                                <div className="h3">skills</div>
                            </div>
                        </div>
                        <div className="middle">
                            <div className="left">
                                <div className="h4">special</div>
                            </div>
                            <div className="mid">
                                <div className="h4">scss design</div>
                                <div className="h4">mongodb</div>
                                <div className="h4">gsap</div>
                                <div className="h4">figma</div>
                                <div className="h4">firebase</div>
                                <div className="h4">scrolltrigger</div>
                            </div>
                            <div className="right">
                                <div className="h4">expertise</div>
                            </div>
                        </div>
                        <div className="bot">
                            <div className="left">
                                <div className="h3_bold">crush</div>
                            </div>
                            <div className="mid">
                                <div className="h3_bold">figma</div>
                                <div className="h3_bold">api</div>
                                <div className="h3_bold">redux</div>
                                <div className="h3_bold">chrome design</div>
                                <div className="h3_bold">tmdb</div>
                                <div className="h3_bold">workouts</div>
                                <div className="h3_bold">game</div>
                            </div>
                            <div className="right">
                                <div className="h3_bold">things</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
