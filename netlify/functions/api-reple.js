// netlify/functions/api-reple.js 맨 위
console.log("===== 함수 시작 =====");
console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("MONGO_URI =", process.env.MONGO_URI);
// ...

// netlify/functions/api-reple.js
const mongoose = require("mongoose");
const express = require("express");
const serverless = require("serverless-http");
const repleRouter = require("../../App/server/router/reple"); // 실제 경로 맞추기
const { mongoURI } = require("../../App/server/key");   // production.js에서 process.env.MONGO_URI 읽음

// DB 연결을 싱글톤으로 관리
let conn = null;
async function connectDB() {
    if (conn) return conn;
    conn = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return conn;
}

const app = express();
app.use(express.json());

// 모든 요청 전에 DB 연결 수행
app.use(async (req, res, next) => {
    try {
        await connectDB();
        console.log("DB 연결 성공");
        next();
    } catch (err) {
        console.error("DB 연결 실패:", err);
        return res.status(500).json({ success: false, message: "DB 연결 실패" });
    }
});

router.post("/getReple", async (req, res) => {
    try {
        const repleList = await Reple.find();
        console.log("Reple.find() 결과:", repleList.length, "개");
        return res.status(200).json({ success: true, repleList });
    } catch (err) {
        console.error("getReple 에러:", err);
        return res.status(500).json({ success: false, message: "댓글 조회 실패" });
    }
});

// 라우터 연결
app.use("/api/reple", repleRouter);

module.exports.handler = serverless(app);
