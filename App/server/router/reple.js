const express = require("express");
const router = express.Router();

const { Reple } = require("../model/Reple.js");

// 댓글 제출
router.post("/submit", async (req, res) => {
    try {
        const { reple, authorName, authorPassword } = req.body;

        // 한글을 포함한 문자열의 길이를 정확하게 계산
        const byteLength = Buffer.from(reple).length;

        // 글자 수 제한 확인
        const MAX_LENGTH = 148;
        if (byteLength > MAX_LENGTH) {
            return res.status(400).json({ success: false, message: "글자수 제한을 초과하였습니다. 50자 이내로 작성해주세요!" });
        }

        // Reple 모델의 인스턴스 생성
        const newReple = new Reple({
            reple,
            authorName,
            authorPassword
        });

        // 댓글 저장
        await newReple.save();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, message: "글자수 제한을 초과하였습니다. 50자 이내로 작성해주세요!" });
    }
});


// 댓글 가져오기
router.post("/getReple", async (req, res) => {
    try {
        const repleList = await Reple.find();
        return res.status(200).json({ success: true, repleList });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

// 댓글 삭제
router.post("/delete", (req, res) => {
    const { repleId, authorPassword } = req.body;

    Reple.findById(repleId)
        .exec()
        .then((reple) => {
            if (!reple) {
                return res.status(404).json({ success: false, message: "댓글을 찾을 수 없습니다." });
            }

            // 비밀번호 확인
            if (reple.authorPassword !== authorPassword) {
                return res.status(401).json({ success: false, message: "비밀번호가 일치하지 않습니다." });
            }

            // 비밀번호가 일치하면 댓글 삭제
            Reple.deleteOne({ _id: repleId })
                .exec()
                .then(() => {
                    return res.status(200).json({ success: true, message: "댓글이 삭제되었습니다." });
                })
                .catch((err) => {
                    return res.status(400).json({ success: false, message: "댓글 삭제에 실패했습니다." });
                });
        })
        .catch((err) => {
            return res.status(500).json({ success: false, message: "서버 오류입니다." });
        });
});


module.exports = router;