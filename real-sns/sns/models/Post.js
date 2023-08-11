//mongooseの読み込み
const mongoose = require("mongoose");

//userデータスキーマ（データ構造の設定）
const PostSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required:true,
        },
        desc: {
            type: String,
            max: 200,
        },
        img: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);


//UserSchemaをmodel関数でエクスポート（UserSchemaをUserという変数名でエクスポート）
//スキーマからUserモデルを生成する:model関数の第一引数には、モデルの対象となるコレクションの単数形の名前を入れます。
//ongooseはモデル名の小文字バージョンを自動的に検索するので、Userモデルはデータベース内のusersコレクションに該当します。
//また、第二引数にはスキーマを指定します。
module.exports = mongoose.model('Post', PostSchema);

//以下使い方の基本の流れ
// 1. Userスキーマを定義
//const userSchema = new mongoose.Schema({ name: String, age: Number }); 
// 2. スキーマからUserモデルを生成する
//const User = mongoose.model('User', userSchema);  
// 3. モデルからインスタンスを作成し、データを代入する
//const user1 = new User({　name:"Hanako", age: 20});
// 4. データを保存する