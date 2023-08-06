//mongooseの読み込み
const mongoose = require("mongoose");

//userデータスキーマ（データの設定）
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
        profilePcture: {
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
module.exports = mongoose.model('User', UserSchema);