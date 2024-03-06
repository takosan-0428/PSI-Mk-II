// login_form.jsx
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ログイン処理を実行する
    console.log("Email:", email);
    console.log("Password:", password);
    // ここでサーバーにログイン情報を送信するなどの処理を追加する
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>メールアドレス:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>パスワード:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
};

export default LoginForm;
