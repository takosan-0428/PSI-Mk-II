// group/index.jsx
import React from "react";
import { Link } from "react-router-dom";

const Group = () => {
  return (
    <div>
      <h2>グループ</h2>
      <ul>
        <li><Link to="/group/create">グループ作成</Link></li>
      </ul>
    </div>
  );
};

export default Group;

