import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: 'Hi, i im funnnnnny', likesCount: 55},
    {id: 2, message: 'hello, its my first post', likesCount: 40},
    {id: 3, message: 'balablabla', likesCount: 30},
    {id: 4, message: 'yoyoyoy', likesCount: 60},
]
let dialogs = [
    {id: 1, name: 'Maria'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sergey'},
    {id: 4, name: 'Alena'},
    {id: 5, name: 'Lena'},
    {id: 6, name: 'Tanya'},
]
let messages = [
    {id: 1, message: 'hello'},
    {id: 2, message: 'im fine'},
    {id: 3, message: 'how are you'},
    {id: 4, message: 'yogurt'},
    {id: 5, message: 'hhhhhhh'},
    {id: 6, message: 'aaaaaaapp'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs}/>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
