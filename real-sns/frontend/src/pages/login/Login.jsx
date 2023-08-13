import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginleft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
        </div>
        <div className="loginRight">
          <form action="" className="loginForm">
            <div className="loginBox">
              <p className="loginMsg">ログインはこちら</p>
              <input
                type="email"
                id="loginEmail"
                className="loginInput"
                placeholder="Eメール"
                required
              />
              <input
                type="password"
                id="loginPassword"
                className="loginInput"
                placeholder="パスワード"
                required
                minLength="6"
              />
              <button className="loginButton">ログイン</button>
              <span className="loginForgot">パスワードを忘れた方へ</span>
              <button className="loginRegisterButton">アカウント作成</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
