//expressのルーティング関数を読み込み
const router = require("express").Router();
//PostSchemaの読み込み
const Post = require("../models/Post");

//投稿を作成する
router.post("/", async(req, res) => {
    //非同期でインスンス化（投稿の作成）
    //モデルからインスタンスを作成し、データを代入する
     const newpost = await new Post(req.body);
     try {
        //データベースにreq.bodyの内容を保存
        const savedPost = await newpost.save();
        return res.status(200).json(savedPost);
     } catch(err) {
        return res.status(500).json(err);
     }
});



//こちらのファイルをエクスポート
module.exports = router;