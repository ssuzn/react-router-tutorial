import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  // 프로젝트에 리액트 라우터를 적용할 때는 index.js 파일에서
  // react-router-dom에 내장되어 있는 BrowserRouter 컴포넌트를 사용
  // 페이지를 새로 불러오지 않고도 주소 변경, 현재 주소의 경로에 관련된 정보를 리액트 컴포넌트에서 사용할 수 있도록 해줌
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);