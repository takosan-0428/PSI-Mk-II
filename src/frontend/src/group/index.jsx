// group/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const Group = () => {
  return (
    <div>
      <h2>グループ</h2>
      <ul>
      <li><Link to="/">
            <h3>株式会社KODAWARI</h3>
            <div>メンバー:Aさん,Bさん,Cさん</div>
        　</Link></li>
          <li><Link to="/">
            <h3>アクティブ</h3>
            <div>メンバー:Aさん,Bさん,Cさん</div>
        　</Link></li>
          <li><Link to="/">
            <h3>被害者の会</h3>
            <div>メンバー:Aさん,Bさん,Cさん</div>
        　</Link></li>
        <li><Link to="/group/create">グループ作成</Link></li>
      </ul>
    </div>
  );
};

export default Group;

