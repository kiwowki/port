import axios from "axios";
import React, { useEffect, useState } from "react";
// import WriteIcon from '../../assets/img/icon/write_placeholder.svg'

const RepleWrite = ({ onUpdateRepleList }) => {
    const [reple, setReple] = useState("");
    const [authorName, setAuthorName] = useState("");
    const [authorPassword, setAuthorPassword] = useState("");

    const [alertVisible, setAlertVisible] = useState(false);
    const MAX_LENGTH = 148;

    const calculateByteLength = (s) => {
        return encodeURI(s).split(/%..|./).length - 1;
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (!reple || !authorName || !authorPassword) {
            return alert("댓글 내용과 작성자 정보를 모두 입력해주세요!");
        }

        const byteLength = calculateByteLength(reple);

        const data = {
            reple: reple,
            authorName: authorName,
            authorPassword: authorPassword,
            byteLength: byteLength,
        };

        axios.post("/api/reple/submit", data).then((response) => {
            if (response.data.success) {
                // alert("소중한 댓글 감사드립니다!");

                // 댓글이 성공적으로 작성되면 부모 컴포넌트에서 전달받은 함수 호출
                onUpdateRepleList();

                // 입력값 초기화
                setReple("");
            } else {
                alert("댓글 작성이 실패했습니다.");
            }
        });
    };

    useEffect(() => {
        if (alertVisible) {
            setTimeout(() => {
                alert(
                    "글자수 제한을 초과하였습니다. 50자 이내로 작성해주세요!"
                );
            }, 0);
            setAlertVisible(false);
        }
    }, [alertVisible]);

    return (
        <form>
            <input
                className="reple_name"
                type="text"
                placeholder="이름"
                value={authorName}
                onChange={(e) => {
                    setAuthorName(e.currentTarget.value);
                }}
                autoComplete="off"
            />
            <input
                className="reple_pass"
                type="password"
                placeholder="비밀번호"
                value={authorPassword}
                onChange={(e) => {
                    setAuthorPassword(e.currentTarget.value);
                }}
                autoComplete="off"
            />
            <input
                className="reple_content"
                type="text"
                placeholder="댓글은 50자 이내로 작성 부탁드립니다!"
                value={reple}
                onChange={(e) => {
                    const inputText = e.currentTarget.value;
                    const byteLength = calculateByteLength(inputText);

                    if (byteLength <= MAX_LENGTH) {
                        setReple(inputText);
                    } else {
                        setReple(inputText.slice(0, MAX_LENGTH));
                        alert("50자 이내로만 작성이 가능합니다!");
                    }
                }}
            />

            <button
                onClick={(e) => {
                    submitHandler(e);
                }}
            >
                WRITE
            </button>
        </form>
    );
};

export default RepleWrite;
