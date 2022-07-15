// index.js 이 파일이 react의 입구 같은 역할
// 여러가지 전역적인 설정이 들어간다고 생각하면 된다.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './PracticeAxios';
// import App from './220714';
// import App from './220714_1';
import App from './220715';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // ↑ 위에 코드가 react에서 여러가지 오류?들을 알려주면서 렌더링을 무조건 1번 해주는데, 그걸 안 해주려면 이렇게 주석 때리면 돼
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
