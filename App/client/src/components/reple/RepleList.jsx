import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import RepleContent from "./RepleContent";
import RepleWrite from "./RepleWrite";

const RepleList = () => {
    const [repleList, setRepleList] = useState([]);
    const repleListRef = useRef(null);

    const fetchRepleList = useCallback(() => {
        axios.post("/api/reple/getReple").then((response) => {
            if (response.data.success) {
                setRepleList([...response.data.repleList]);
            }
        });
    }, []);

    const onUpdateRepleList = useCallback(() => {
        fetchRepleList();
    }, [fetchRepleList]);

    useEffect(() => {
        onUpdateRepleList(); // 초기 로딩 시에도 업데이트 수행
    }, [onUpdateRepleList]);

    const handleDeleteSuccess = useCallback((deletedRepleId) => {
        // 댓글 삭제 성공 시 호출되는 콜백
        setRepleList((prevRepleList) =>
            prevRepleList.filter((reple) => reple._id !== deletedRepleId)
        );
    }, []);

    useEffect(() => {
        // RepleContent가 업데이트 될 때마다 스크롤을 맨 아래로 내림
        const repleListElement = repleListRef.current;
        if (repleListElement) {
            repleListElement.scrollTop = repleListElement.scrollHeight;
        }
    }, [repleList]);

    return (
        <>
            <div
                data-lenis-prevent-wheel
                ref={repleListRef}
                className="reple_list"
            >
                <div className="reple_padding">
                    {repleList
                        .slice()
                        .reverse()
                        .map((reple, idx) => {
                            const reversedIndex = idx % 8; // 1부터 시작하는 인덱스를 8로 나눈 나머지를 사용
                            return (
                                <RepleContent
                                    reple={reple}
                                    key={idx}
                                    index={reversedIndex}
                                    onDeleteSuccess={handleDeleteSuccess}
                                />
                            );
                        })}
                </div>
            </div>
            <RepleWrite onUpdateRepleList={onUpdateRepleList} />
        </>
    );
};

export default RepleList;
