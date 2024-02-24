import React from 'react';
import ReactDOM from 'react-dom';

const element = (
  <div>
    <h1>Hello, World!</h1>
    <p>{message}</p>
  </div>
);

ReactDOM.render(element, document.getElementById('root')); // 'root'は表示するDOM要素のIDに置き換える必要があります

