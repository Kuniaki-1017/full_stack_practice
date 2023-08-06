//expressのルーティング関数を読み込み
const router = require("express").Router();
//PostSchemaの読み込み
const Post = require("../models/Post");
//UserSchemaの読み込み
const User = require("../models/User");

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


//特定の投稿を取得する
router.get("/:id", async(req, res) => {
    try {
        //取得したい投稿のIDを投稿のidから取得
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post);
    } catch(err) {
        return res.status(403).json(err);
    }
});

//特定の投稿にいいねを押す
router.put("/:id/like", async(req, res) => {
        try {
            //データベースからリクエストパラメーターのIdと合致するドキュメントを取得（いいねする対象のID）※データベースと通信するためawait使用
            const post = await Post.findById(req.params.id);
            //まだ投稿にいいねを押していなかったらいいねを押す
            if(!post.likes.includes(req.body.userId)){
                await post.updateOne({
                    //$push:配列にpush
                    $push: {
                        //likesに自分のidを入れる（push）
                        likes: req.body.userId,
                    }
                });
                return res.status(200).json("投稿にいいねを押しました");
                //投稿に既にいいねが押されていたら
            } else {
                //いいねしているユーザーIDを取り除く
                await post.updateOne({
                    $pull: {
                        likes: req.body.userId,
                    }
                });
                return res.status(403).json("いいねを外しました");
            }

        } catch(err) {
            return res.status(500).json(err);
                }
});

//タイムラインの投稿を取得する
//特定の投稿を取得するで/:idでgetしているためエンドポイントの階層を深くしないとうまく動作しないため注意
router.get("/timeline/all", async (req, res) => {
    try {
        //自分自身の投稿を取得
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await post.find({
            //currentUser._id = currentUserの全ての投稿のidを配列で取得(全て = find)
            userId: currentUser._id
        });
        //自分がフォローしている友達の投稿内容を全て取得する
        //Promise.all → currentUserが非同期で処理されているためいつデータが戻ってくるかわからない。そのためPromise.allを使用する
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                //find({userId: friendId})　→自分がフォローしている人の投稿を全て取得できる
                return Post.find({userId: friendId});
            })
        );
        //concat メソッドを使うと配列に対して別の配列を結合した新しい配列を取得することができます
        //
        return res.status(200).json(userPosts.concat(...friendPosts));

    } catch(err) {
        return res.status(500).json(err);
    }
});






//こちらのファイルをエクスポート
module.exports = router;