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

//投稿を更新する※userIdではなく投稿のidを指定
router.put("/:id", async(req, res) => {
    try {
        //更新したい投稿のIDを投稿のidから取得
        const post = await Post.findById(req.params.id);
        //更新したい投稿のidと更新する人のidが一致しているか確認
        if(post.userId === req.body.userId){
            await post.updateOne({
                //$setでreq.bodyのデータをset
                $set: req.body,
            });
            return res.status(200).json("投稿編集に成功しました");
        }else {
            return res.status(403).json("あなたは他の人の投稿を編集できません");
        }
    } catch(err) {
        return res.status(403).json(err);
    }
});


//投稿を削除する
router.delete("/:id", async(req, res) => {
    try {
        //削除したい投稿のIDを投稿のidから取得
        const post = await Post.findById(req.params.id);
        //削除したい投稿のidと削除する人のidが一致しているか確認
        if(post.userId === req.body.userId){
            await post.deleteOne();
            return res.status(200).json("投稿削除に成功しました");
        }else {
            return res.status(403).json("あなたは他の人の投稿を削除できません");
        }
    } catch(err) {
        return res.status(403).json(err);
    }
});


//こちらのファイルをエクスポート
module.exports = router;