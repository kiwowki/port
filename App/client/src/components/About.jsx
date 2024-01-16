import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { aboutTop } from "../constants/index";
import { aboutMid } from "../constants/index";

import { aboutT1 } from "../constants/index";
import { aboutT2 } from "../constants/index";
import { aboutT3 } from "../constants/index";

import aboutI1 from "../assets/img/about_img2.jpg";
import aboutI2 from "../assets/img/about_img3.jpg";
import aboutI3 from "../assets/img/about_img4.jpg";

import aboutG1 from "../assets/img/gif/about_gif1.gif";
import aboutG2 from "../assets/img/gif/about_gif2.gif";
import aboutG3 from "../assets/img/gif/about_gif3.gif";
import aboutG4 from "../assets/img/gif/about_gif4.gif";

// import { aboutImg } from "../utils/aboutImg.js";

import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const photoRows = [0, 1, 2]; // 세 줄의 사진을 표현합니다.
const photosPerRow = [0, 1, 2, 3, 4]; // 각 줄에 5개의 사진이 있습니다.

const About = () => {
  useEffect(() => {
    const targetsT1 = gsap.utils.toArray(".about_text_top .t1.split");
    const targetsT2 = gsap.utils.toArray(".about_text_top .t2.split");
    const targetsT3 = gsap.utils.toArray(".about_text_top .t3.split");

    targetsT1.forEach((target) => {
      let splitClient = new SplitType(target, {
        type: "lines, words, chars",
      });
      let chars = splitClient.chars;

      gsap.from(chars, {
        yPercent: 50,
        opacity: 0,
        rotation: 10,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "+400",
        },
      });
    });
    targetsT2.forEach((target) => {
      let splitClient = new SplitType(target, {
        type: "lines, words, chars",
      });
      let chars = splitClient.chars;

      gsap.from(chars, {
        yPercent: 50,
        opacity: 0,
        rotation: 10,
        duration: 0.1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "+400",
        },
      });
    });
    targetsT3.forEach((target) => {
      let splitClient = new SplitType(target, {
        type: "lines, words, chars",
      });
      let chars = splitClient.chars;

      gsap.from(chars, {
        yPercent: 50,
        opacity: 0,
        rotation: 10,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: target,
          start: "top bottom",
          end: "+400",
        },
      });
    });

    const copies = document.querySelectorAll(".background-copy");

    const numCopies = copies.length;

    window.addEventListener("scroll", function () {
      // 현재 스크롤 위치 구하기
      const scrollPosition = window.scrollY;

      // 스크롤 위치에 따라 특정 비율의 이미지를 보여주기
      for (let i = 0; i < numCopies; i++) {
        if (i === 0) {
          // nth-child(1)일 경우에는 고정으로 나오도록 설정
          copies[i].style.opacity = 1;
        } else {
          const offsetAdjustment = 450;

          // 다른 이미지들은 스크롤 위치에 따라 특정 비율의 효과 적용
          const percentage =
            ((scrollPosition - (copies[i].offsetTop + offsetAdjustment)) /
              window.innerHeight) *
            100;
          copies[i].style.opacity = Math.max(
            0,
            Math.min(1, (percentage - (i - 1) * 20) / 20)
          );
        }
      }
    });
  }, []);

  useEffect(() => {
    const hide = (item) => {
      gsap.set(item, { autoAlpha: 0 }); // gsap에서 css 정하기
    };

    const animate = (item) => {
      let x = 0;
      let y = 0;
      let delay = item.dataset.delay; // 속성값 만들어 둠

      if (item.classList.contains("reveal_LTR")) {
        // 클래스에 그것이 포함되어있는지 찾기
        x = -100;
        y = 0;
      } else if (item.classList.contains("reveal_BTT")) {
        x = 0;
        y = 100;
      } else if (item.classList.contains("reveal_TTB")) {
        x = 0;
        y = -100;
      } else {
        // 기본 리빌 RTL
        x = 100;
        y = 0;
      }

      gsap.fromTo(
        item, // 전과 현재의 위치 계산후 둘 다 줌
        { autoAlpha: 0, x: x, y: y },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          delay: delay,
          duration: 1.25,
          overwrite: "auto",
          ease: "expo",
        }
      ); // 컴 느릴때 실행 중복되지않게 오토로 설정
    };

    gsap.utils.toArray(".reveal").forEach((item) => {
      hide(item);

      ScrollTrigger.create({
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        onEnter: () => {
          animate(item);
        }, // 콜백함수
      });
    });

    gsap.utils.toArray(".about_text_midle .split").forEach((item) => {
      gsap.to(item, {
        yPercent: -100,
        duration: 0.5,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    });
    gsap.utils
      .toArray("#about .about_text_bottom .t6, #about .about_text_bottom .t7")
      .forEach((item) => {
        gsap.to(item, {
          yPercent: -50,
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
  }, []);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#section3",
          start: "top top",
          end: "+=800%",
          scrub: true,
          pin: true,
          markers: true,
        },
      })
      .fromTo(
        "#section3 .p1 p",
        { opacity: 1, scale: 0.5 },
        { opacity: 1, scale: 1.2, duration: 1 }
      )
      .fromTo(
        "#section3 .p1 .about_photos_img",
        { opacity: 1 },
        { opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        "#section3 .p2 p",
        { opacity: 1, scale: 0.5 },
        { opacity: 1, scale: 1.2, duration: 1 },
        "+=0.5"
      )
      .fromTo(
        "#section3 .p2 .about_photos_img",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        "#section3 .p3 p",
        { opacity: 1, scale: 0.5, zIndex: 0 },
        { opacity: 1, scale: 1.2, duration: 1, zIndex: 1 },
        "+=0.5"
      )
      .fromTo(
        "#section3 .p3 .about_photos_img",
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        "#section3 .p3 .about_photos_img .photo",
        { scale: 1 },
        { scale: 0 },
        "+=0.3"
      );

    return () => {
      ScrollTrigger.getAll().forEach((ST) => ST.kill());
    };
  }, []);

  useEffect(() => {
    // about photos 2 랜덤이미지
    const imageArray = [aboutI1, aboutI2, aboutI3];

    const photoElements = document.querySelectorAll(
      "#section3 .intro-wrap .intro .p2 .about_photos_img .photo_wrap .photo"
    );

    photoElements.forEach((photoElement) => {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      const randomImage = imageArray[randomIndex];

      photoElement.style.backgroundImage = `url('${randomImage}')`;
    });

    // about photos 3 랜덤이미지
    const imageArray2 = [aboutG1, aboutG2, aboutG3, aboutG4];

    const photoElements2 = document.querySelectorAll(
      "#section3 .intro-wrap .intro .p3 .about_photos_img .photo_wrap .photo"
    );

    photoElements2.forEach((photoElement2) => {
      const randomIndex2 = Math.floor(Math.random() * imageArray2.length);
      const randomImage2 = imageArray2[randomIndex2];

      photoElement2.style.backgroundImage = `url('${randomImage2}')`;
    });
  });

  return (
    <section id="about">
      <h2 className="blind">about</h2>
      <div className="about_wrap">
        <div className="about_text_top">
          {aboutTop.map((text, index) => {
            return (
              <div className={`text t${index + 1} split`} key={index}>
                {text}
              </div>
            );
          })}
        </div>
        <div className="about_img">
          <div className="background-container">
            <div className="background-copy"></div>
            <div className="background-copy"></div>
            <div className="background-copy"></div>
            <div className="background-copy"></div>
            <div className="background-copy"></div>
          </div>
        </div>
        <div className="about_text_midle">
          {aboutMid.map((text, index) => {
            return (
              <div className={`text t${index + 4} split`} key={index}>
                {text}
              </div>
            );
          })}
        </div>
        <div className="about_text_bottom">
          <div className="text t6">
            <h3 className="split2 reveal reveal_RTL">fullstack developer</h3>
            <p className="split3 reveal reveal_RTL">
              {aboutT1.map((phrase, index) => {
                return (
                  <span key={index}>
                    {phrase}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
          <div className="text t7">
            <h3 className="split2 reveal reveal_LTR">enhance skills</h3>
            <p className="split3 reveal reveal_LTR">
              {aboutT2.map((phrase, index) => {
                return (
                  <span key={index}>
                    {phrase}
                    <br />
                  </span>
                );
              })}
            </p>
            <p className="split3 reveal reveal_LTR">
              {aboutT3.map((phrase, index) => {
                return (
                  <span key={index}>
                    {phrase}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <div id="section3">
          <div className="intro-wrap">
            <div className="intro i1">
              {["first Challenge", "hidden Challenge", "last Challenge"].map(
                (challenge, index) => (
                  <div key={index} className={`p${index + 1}`}>
                    <div className="about_photos_img">
                      <p className={`t${index + 1} mbm-diff`}>{challenge}</p>
                      {photoRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="photo_wrap">
                          {photosPerRow.map((photo, photoIndex) => (
                            <div key={photoIndex} className="photo"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
