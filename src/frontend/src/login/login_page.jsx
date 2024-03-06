// login_page.jsx
import React from "react";
import LoginForm from "./login_form";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <h2>ログイン</h2>
      <LoginForm />
      <Link to="/registration">新規登録はこちら</Link>
    </div>
  );
};

export default LoginPage;
