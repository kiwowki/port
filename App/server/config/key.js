if (process.env.NODE_ENV === "production") {
    // 배포 상태
    module.exports = require("./production.js");
} else {
    // 개발 상태
    module.exports = require("./dev.js");
    // module.exports = {
    //     mongoURI: "mongodb+srv://wolves941110:rkdtjr00%21%21@cluster0.efj98qh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    // };
}