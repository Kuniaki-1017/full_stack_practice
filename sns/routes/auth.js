//expressのルーティング関数を読み込み
const router = require("express").Router();

//UserSchemaの読み込み
const User = require("../models/User");

//ルーティング関数を使用してルーティング設定（server.jsで設定したエンドポイント=こちらのファイルではルートとなる）
router.get("/", (req, res) => {
    res.send("auth router");
});

//ユーザー登録21
router.post("/register", async(req, res) => {
    //try catch文を記述
    try {
        //非同期でインスンス化（ユーザの新規作成）
        const newUser = await new User({
            //POSTリクエストに含まれるbody要素のプロパティを格納
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        //新規作成したユーザを保存
        const user = await newUser.save();
        //エラーがない場合下記ステータスとuser情報をレスポンスで返す
        return res.status(200).json(user);

    } catch(err){   
        //エラーがあった場合の処理を記述
        return res.status(500).json(err);
    }
});

//こちらのファイルをエクスポート
module.exports = router;