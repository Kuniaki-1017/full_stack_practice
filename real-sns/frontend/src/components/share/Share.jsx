import React, { useContext, useRef, useState } from "react";
import "./Share.css";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

export default function Shere() {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const desc = useRef();

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      //new FormData：Web サイト上のフォームの内容を簡単にキャプチャできます。
      //キャプチャした内容はキー・バリューのペアとして (要はディクショナリとして) 利用することができます。
      //FormData のコンストラクタに、form 要素の DOM オブジェクトを渡すと自動的にフォームの内容を取り込みます。
      const data = new FormData();
      //重複の可能性があるデータのため現在時刻を足して保存
      const fileName = Date.now() + file.name;
      //FormData オブジェクトの set() メソッドや append() メソッドを使うと、
      //FormData オブジェクトに新しいキーと値をセットできます。
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        //画像アップロードAPIを叩く
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + user.profilePicture
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今何してるの"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        <form className="shareButtoms" onSubmit={(e) => handleSubmit(e)}>
          <div className="shareOptions">
            <label className="shareOption" htmlFor="file">
              <ImageIcon className="shareIcon" htmlColor="blue" />
              <span className="shareOptionText">写真</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <GifIcon className="shareIcon" htmlColor="hotpink" />
              <span className="shareOptionText">GIF</span>
            </div>
            <div className="shareOption">
              <FaceIcon className="shareIcon" htmlColor="green" />
              <span className="shareOptionText">気持ち</span>
            </div>
            <div className="shareOption">
              <AnalyticsIcon className="shareIcon" htmlColor="red" />
              <span className="shareOptionText">投票</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            投稿
          </button>
        </form>
      </div>
    </div>
  );
}
