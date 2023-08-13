import React from "react";
import "./Register.css";
import { useRef } from "react";
import axios from "axios";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const username = useRef();

  //form内のbuttonが押された時のイベントを定義
  const hendleSubmit = async (e) => {
    e.preventDefault();

    //パスワードと確認用のパスワードがあっているか確認
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValibity("パスワードが違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        await axios.post("/auth/register", user);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerleft">
          <h3 className="registerLogo">Real SNS</h3>
          <span className="registerDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={(e) => hendleSubmit(e)}>
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="text"
              className="registerInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="確認用パスワード"
              required
              minLength="6"
              ref={passwordConfirmation}
            />
            <button className="registerButton" type="submit">
              サインアップ
            </button>
            <button className="registerRegisterButton">ログイン</button>
          </form>
        </div>
      </div>
    </div>
  );
}
