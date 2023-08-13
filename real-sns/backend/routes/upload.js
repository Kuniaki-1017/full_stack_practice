//expressのルーティング関数を読み込み
const router = require("express").Router();
//multerのインストール。ファイルのアップロードに使用される
const multer = require("multer");


// multerのdiskStorageを定義  
const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, "public/images");
    },
    filename: (req, res, cd) => {
        cd(null, file.originalname);
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