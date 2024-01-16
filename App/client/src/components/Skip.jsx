import React from "react";
import { Link } from "react-router-dom";

const Skip = () => {
    return (
        <div id="skip">
            <Link to="#header">헤더 영역 바로가기</Link>
            <Link to="#intro">인트로 영역 바로가기</Link>
            <Link to="#about">소개 영역 바로가기</Link>
            <Link to="#works">사이트 영역 바로가기</Link>
            <Link to="#skills">스킬 영역 바로가기</Link>
            <Link to="#contact">연락처 영역 바로가기</Link>
        </div>
    );
};

export default Skip;
