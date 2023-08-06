//expressのルーティング関数を読み込み
const router = require("express").Router();

//ルーティング関数を使用してルーティング設定（server.jsで設定したエンドポイント=こちらのファイルではルートとなる）
router.get("/", (req, res) => {
    res.send("user router");
});
router.get("/profile", (req, res) => {
    res.send("user profile");
});

//こちらのファイルをエクスポート
module.exports = router;