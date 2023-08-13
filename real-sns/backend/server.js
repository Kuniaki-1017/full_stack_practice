//expressをインストール：ローカルサーバ等を扱える
const express = require("express");
const app = express();

//dotenvを読み込みコンフィグ関数を使用する(envファイルの変数が使用できるようになる)
//第三者にパスワードを見れないようにし、gitignoreでgitリポジトリに上げないようにする。
const dotenv = require("dotenv");
dotenv.config();

//データベース接続するためにmongoose読み込み
const mongoose = require("mongoose");

//データーベース接続（引数にURLを設定することで接続できる：URL取得は下記参考）※非同期
//mongodbにアクセス→クラスターのconnectでConnect to your applicationを選択→Add your connection string into your application code内の
//3.Add your connection string into your application codeに記載のURLをコピーしてmongoose.connectの引数に設定
//<password>→自分で設定したパスワード置換
//?retryWrites=true&w=majorityの?の直前に任意の名前を記述（今回で言うとrealsns）
//process.env.MONGOURLで.envファイルの変数読み込み（.envファイルはルートディレクトリに配置）※接続できない場合は、ディレクトの配置、接続先URLMONOGODBで確認しコピペしなおすことで大体解決する
mongoose.connect(process.env.MONGOURL)
.then(() => {
    console.log("DBと接続中...");
})
.catch((err) => {
    console.log(err);
    console.log("DB接続に失敗しました");
})

//PORT番号の設定:基本的に任意の数字を設定できる
const PORT = 5000;

//ルーティング設定したファイルの読み込み
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const uploadRoute = require("./routes/upload");

//サーバの起動関数を使用
app.listen(PORT, () => console.log("サーバーが起動しました"));

//expressでjsonを使用するための関数を実行
app.use(express.json());
//ミドルウェアの設定：第一引数にエンドポイントの設定（ルーティング設定先では"/"になる）、第二引数にルーティング設定した変数（requireしたファイル）
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postsRoute);
app.use("/api/upload", uploadRoute);





//
app.get("/", (req, res) => {
    res.send("Hello Express");
});

// app.get("/users", (req, res) => {
//     res.send("users");
// });
