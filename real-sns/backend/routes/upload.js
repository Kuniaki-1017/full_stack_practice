//expressのルーティング関数を読み込み
const router = require("express").Router();
//multerのインストール。ファイルのアップロードに使用される
const multer = require("multer");


// multerのdiskStorageを定義  
const storage = multer.diskStorage({
    //どこに保存するか（public/images）
    destination: (req, file, cd) => {
        cd(null, "public/images");
    },
    // ファイル名
    filename: (req, file, cd) => {
        cd(null, req.body.name);
    },
});
const upload = multer({storage});

//画像アップロード用のAPI
//第一引数：エンドポイント
// 第二引数：ミドルウェアの設定（multerのupladeのsingle関数）
// 第三引数:処理
router.post("/",  upload.single("file"), (req, res) => {
    try{
        return res.status(200).json("画像アップロードに成功しました");

    }catch(err) {
        console.log(err);
    }
});


module.exports = router;