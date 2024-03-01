// posts/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
    return(
        <div>
        <h2>単語帳一覧</h2>
        <ul>
          <li><Link to="/show">
            <h3>ネットワーク</h3>
            <div>更新日:00:00:00</div>
            <div>作成日:00:00:00</div>
        　</Link></li>
          <li><Link to="/show">
            <h3>データベース</h3>
            <div>更新日:00:00:00</div>
            <div>作成日:00:00:00</div>
        　</Link></li>
          <li><Link to="/show">
            <h3>セキュリティ</h3>
            <div>更新日:00:00:00</div>
            <div>作成日:00:00:00</div>
        　</Link></li>
          <li><Link to="/create">単語帳作成</Link></li>
        </ul>
      </div>
    );
};


export default Post;