import React from "react";
import "./Register.css";
import { useRef } from "react";

export default function Register() {
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const usrename = useRef();

  //form内のbuttonが押された時のイベントを定義
  const hendleSubmit = (e) => {
    e.preventDefault();
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
              ref={usrename}
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
