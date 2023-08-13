//mongooseの読み込み
const mongoose = require("mongoose");

//userデータスキーマ（データ構造の設定）
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 3,
            max:25,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max:50,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            type: Array,
            default: [],
        },
        followings :{
            type: Array,
            default: [],
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        desc: {
            type: String,
            max: 70,
        },
        city: {
            type: String,
            max: 50,
        },
    },
    { timestamps: true },
);

//UserSchemaをmodel関数でエクスポート（UserSchemaをUserという変数名でエクスポート）
//スキーマからUserモデルを生成する:model関数の第一引数には、モデルの対象となるコレクションの単数形の名前を入れます。
//ongooseはモデル名の小文字バージョンを自動的に検索するので、Userモデルはデータベース内のusersコレクションに該当します。
//また、第二引数にはスキーマを指定します。
module.exports = mongoose.model('User', UserSchema);

//以下使い方の基本の流れ
// 1. Userスキーマを定義
//const userSchema = new mongoose.Schema({ name: String, age: Number }); 
// 2. スキーマからUserモデルを生成する
//const User = mongoose.model('User', userSchema);  
// 3. モデルからインスタンスを作成し、データを代入する
//const user1 = new User({　name:"Hanako", age: 20});
// 4. データを保存する
//await user1.save();