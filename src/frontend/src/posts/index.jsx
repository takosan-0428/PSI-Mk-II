// posts/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
    return(
        <div>
        <h2>個人</h2>
        <ul>
          <li><Link to="/create">単語帳作成</Link></li>
          <li><Link to="/show">単語帳詳細</Link></li>
        </ul>
      </div>
    );
};


export default Post;