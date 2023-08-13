import React, { useRef } from "react";
import "./Login.css";

export default function Login() {
  //要素を監視できる関数userRefを使用。監視したいタグに今回で言うとref="email"と記述。
  const email = useRef();
  const password = useRef();

  //form内のbuttonが押された時のイベントを定義
  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginleft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">本格的なSNSを自分の手で</span>
        </div>
        {/* formタグにはonSubmit属性が使える　→ submitボタンを押した時の挙動を制御できる */}
        <form className="loginRight" onSubmit={(e) => hendleSubmit(e)}>
          <div className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              id="loginEmail"
              className="loginInput"
              placeholder="Eメール"
              required
              ref={email}
            />
            <input
              type="password"
              id="loginPassword"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="6"
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </div>
        </form>
      </div>
    </div>
  );
}
