//expressのルーティング関数を読み込み
const router = require("express").Router();

//UserSchemaの読み込み
const User = require("../models/User");

//ルーティング関数を使用してルーティング設定（server.jsで設定したエンドポイント=こちらのファイルではルートとなる）
router.get("/", (req, res) => {
    res.send("auth router");
});

//ユーザー登録機能の実装
router.post("/register", async(req, res) => {
    //try catch文を記述
    try {
        //非同期でインスンス化（ユーザの新規作成）
        //モデルからインスタンスを作成し、データを代入する
        const newUser = await new User({
            //POSTリクエストに含まれるbody要素のプロパティを格納
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        //新規作成したユーザデータを保存する
        const user = await newUser.save();
        //エラーがない場合下記ステータスとuser情報をレスポンスで返す
        return res.status(200).json(user);

    } catch(err){   
        //エラーがあった場合の処理を記述
        return res.status(500).json(err);
    }
});


//ログイン機能の実装
router.post("/login", async(req, res) => {
    try {
        //User（mongoose.Schemaで作ったインスタンス）のfindOne関数を使用してユーザを指定した条件で探す処理をする：下記emailを持ったユーザー情報があるか確認
        const user = await User.findOne({ email: req.body.email });
        //emailが登録されていなかったらの処理
        if(!user){
            return res.status(404).send("ユーザーが見つかりませんでした。");
        }
        //送信されたパスワードが登録されたパスワードと一致しているか確認
        const vailedPassword = req.body.password === user.password;
        if(!vailedPassword){
            return res.status(400).send("パスワードが違います");
        }
        //emailが存在し、パスワードが合っていたらuser情報を返す
        return res.status(200).json(user);

    } catch(err) {
        return res.status(500).json(err);
    }
});


//こちらのファイルをエクスポート
module.exports = router;