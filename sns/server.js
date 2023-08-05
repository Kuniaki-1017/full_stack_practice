const express = require("express");
const app = express();
const userRoute = require("./routes/users");

const PORT = 3000;

app.listen(PORT, () => console.log("サーバーが起動しました"));

//ミドルウェア
app.use("/api/users", userRoute);




app.get("/", (req, res) => {
    res.send("小沼です");
});

// app.get("/users", (req, res) => {
//     res.send("users");
// });

