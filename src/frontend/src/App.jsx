import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Post from "./posts";
import PostClient from "./posts/create";
import PostShow from "./posts/show";

import Group from "./group"; 
import GroupClient from "./group/create"; 

const App = () => {
  return (
    <div>
      <h1>PSI</h1>
      <ul>
        <li><Link to="/">単語帳</Link></li>
        <li><Link to="/group">グループ</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/create" element={<PostClient />} />
        <Route path="/show" element={<PostShow/>} />

        <Route path="/group" element={<Group />} />
        <Route path="/group/create" element={<GroupClient />} />
      </Routes>
    </div>
  );
};

export default App;





