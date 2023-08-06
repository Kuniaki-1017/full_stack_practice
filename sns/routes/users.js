//expressのルーティング関数を読み込み
const router = require("express").Router();

//UserSchemaの読み込み
const User = require("../models/User");



//ルーティング関数を使用してルーティング設定（server.jsで設定したエンドポイント=こちらのファイルではルートとなる）
// router.get("/", (req, res) => {
//     res.send("posts router");
// });
// router.get("/profile", (req, res) => {
//     res.send("posts profile");
// });


//CRUD操作
//ユーザー情報の更新
//ユーザー情報の削除
//ユーザー情報の取得
//ユーザー情報の登録　→ auth.jsで実装

//ユーザー情報の更新
router.put("/:id", async(req, res) => {
    //req.params.id　→　リクエストパラメーターで送られてきた/:idの情報
    //上記IDが一致、またはisAdimnがtrueならログインしている（本人）と証明されるため変更可能とする
    if(req.body.userId  === req.params.id || req.body.isAdmin){
        try {
            //上記if条件に合っていれば、//User（mongoose.Schemaで作ったインスタンス）のfindByIdAndUpdate関数を使用して
            //ユーザ情報を見つけて更新する処理を実行する
            //第一引数どのユーザー情報を更新するか指定（で入力されたユーザーIDを指定）、第二引数にオブジェクトで更新内容を記述
            const user = await User.findByIdAndUpdate(req.params.id, {
                //$serは全てのパラメーターという意味　→ userデータスキーマで記述したパラメータ全てという意味.
                //上記全てをリクエストで渡ってきた(現段階ではPOATMANで打ち込んだbody内容)情報に書き換える（req.body）
                $set: req.body,
            });
            res.status(200).json("ユーザ情報が更新されました");
             
        } catch(err) {
            return res.status(500).json(err);
        }

    } else {
        return res.status(403).json("自分のアカウントの時のみ情報を更新できます");
    }
});


//ユーザー情報の削除
router.delete("/:id", async(req, res) => {
    //req.params.id　→　リクエストパラメーターで送られてきた/:idの情報
    //上記IDが一致、またはisAdimnがtrueならログインしている（本人）と証明されるため変更可能とする
    if(req.body.userId  === req.params.id || req.body.isAdmin){
        try {
            //上記if条件に合っていれば、//User（mongoose.Schemaで作ったインスタンス）のfindByIdAndDelete関数を使用して
            //ユーザ情報を見つけて削除する処理を実行する
            //どのユーザー情報を削除するか指定（で入力されたユーザーIDを指定）
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("ユーザ情報が削除されました");
             
        } catch(err) {
            return res.status(500).json(err);
        }

    } else {
        return res.status(403).json("自分のアカウントの時のみ情報を削除できます");
    }
});


//ユーザー情報の取得
router.get("/:id", async(req, res) => {
    //req.params.id　→　リクエストパラメーターで送られてきた/:idの情報
    //上記IDが一致、またはisAdimnがtrueならログインしている（本人）と証明されるため変更可能とする
        try {
            //上記if条件に合っていれば、//User（mongoose.Schemaで作ったインスタンス）のfindByIdById関数を使用して
            //ユーザ情報を見つけて取得する処理を実行する
            //どのユーザー情報を取得するか指定（で入力されたユーザーIDを指定）
            const user = await User.findById(req.params.id);
            //分割代入でpasswordとupdateAtの取り除いた情報を定義する。passwordとupdatedAt以外のプロパティは...otherにオブジェクトで代入される（otherオブジェクトが生成される）
            //user._doc → 取得したuser情報の全てのプロパティを取得
            const {password, updatedAt, ...other} = user._doc;
            res.status(200).json(other);
             
        } catch(err) {
            return res.status(500).json(err);
        }

});



//こちらのファイルをエクスポート
module.exports = router;