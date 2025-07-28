// netlify/functions/api-reple.js
const express     = require("express");
const serverless  = require("serverless-http");
const repleRouter = require("../../App/server/router/reple");
const app         = express();

// Body 파싱
app.use(express.json());

// /api/reple/* 경로로 라우터 연결
app.use("/api/reple", repleRouter);

// Lambda 핸들러 내보내기
module.exports.handler = serverless(app);