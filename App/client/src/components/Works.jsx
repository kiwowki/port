import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { workText } from "../constants/index";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Works = () => {
  useEffect(() => {
    // work gsap 핀 효과 넣기
    const works = gsap.utils.toArray(".work");

    works.forEach((work, i) => {
      const img = work.querySelector(".img img");

      const ani = gsap.timeline();
      ani.to(img, {
        scale: 1.5,
      });

      const mediaQuery = window.matchMedia("(max-width: 1000px)");

      if (mediaQuery.matches) {
        ScrollTrigger.create({
          trigger: work,
          start: "top top",
          end: "bottom top", // 예를 들어 "bottom top" 또는 원하는 위치로 조절해보세요
          scrub: true,
        });
      } else {
        // 트리거 엘리먼트의 높이를 가상의 높이로 설정
        const virtualHeight = window.innerHeight * 6; // 예를 들어 2배로 설정

        ScrollTrigger.create({
          animation: ani,
          trigger: work,
          start: "top top",
          end: `+=${virtualHeight}`, // 가상의 높이를 추가
          scrub: true,
          pin: true,
          pinSpacing: false,
        });
      }
    });
  });

  return (
    <section id="works">
      <h2 className="blind">works</h2>
      {workText.map((work, index) => (
        <div key={`work${index + 1}`} className={`work w${index + 1}`}>
          <div className="work_wrap">
            <div className="top">
              <h2 className="title">{work.title}</h2>
              {/* <span>{work.span}</span> */}
            </div>
            <div className="desc">{work.desc}</div>
            <div className="img">
              <img src={work.img} alt="img" />
            </div>
            <nav className="works_nav" role="navigation">
              <Link to={work.href1}>{work.nav1}</Link>
              <Link to={work.href2}>{work.nav2}</Link>
            </nav>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Works;
