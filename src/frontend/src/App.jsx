//App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Login from "./login/login_page";

import Registration from "./registration/registration_page";

import Post from "./posts";
import PostClient from "./posts/create";
import PostShow from "./posts/show";

import Group from "./group"; 
import GroupClient from "./group/create"; 

import './App.css';
import Button from '@mui/material/Button';


const App = () => {
  return (
    <div>
      <div className="header">
      <h1>Share Knowledge</h1>
      <ul>
        <li><Link to="/"><Button variant="text">個人</Button></Link></li>
        <li><Link to="/group"><Button variant="text">グループ</Button></Link></li>
      </ul>
      <Link to="/login"><Button variant="contained">ログアウト</Button></Link>
      
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/registration" element={<Registration />} />

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





