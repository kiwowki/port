import React, { useEffect, useRef } from "react";
import RepleList from "./RepleList";
// import RepleWrite from "./RepleWrite";

const RepleArea = () => {
    // const [repleListUpdated, setRepleListUpdated] = useState(false);
    const repleWrapRef = useRef();

    useEffect(() => {
        // 스크롤이 있는 경우에만 실행
        if (repleWrapRef.current) {
            repleWrapRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest",
            });
        }
    }, []); // repleListUpdated를 의존성 배열에서 제거

    return (
        <div className="reple_wrap" ref={repleWrapRef}>
            <RepleList repleListUpdated={false} />{" "}
        </div>
    );
};

export default RepleArea;
