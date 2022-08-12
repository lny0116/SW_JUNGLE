import './App.css';
import {useState,useRef} from "react";

function BookName(){
  return <div className='BookListItem'>book name</div>
}

function Grass(){
  // const squares = document.querySelector('.squares');
  // for (let i = 1; i < 365; i++) {
  //   const level = Math.floor(Math.random() * 3);  
  //   squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
  // }
  return <div className="graph">
  <ul className="months">
    <li>Jan</li>
    <li>Feb</li>
    <li>Mar</li>
    <li>Apr</li>
    <li>May</li>
    <li>Jun</li>
    <li>Jul</li>
    <li>Aug</li>
    <li>Sep</li>
    <li>Oct</li>
    <li>Nov</li>
    <li>Dec</li>
  </ul>
  <ul className="days">
    <li>Sun</li>
    <li>Mon</li>
    <li>Tue</li>
    <li>Wed</li>
    <li>Thu</li>
    <li>Fri</li>
    <li>Sat</li>
  </ul>
  <ul className="squares">
  </ul>
</div>
}

function App(){
  return (
    <>
      <div className='Container'>
        <img className='LogoImage' src='https://abrasive-wholesaler-263.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa4dddbb9-2d7e-4ed2-9e58-23fc77b4d0d6%2FLabel_logo_full.png?table=block&id=e913a73d-d3cf-4969-99ef-ce8e920c82aa&spaceId=16cf1607-3cc0-4711-9ea0-019cf8edb4ca&width=1250&userId=&cache=v2'></img>
        <h2 className='MyLibrary'>My Library</h2>
      </div>
      <div className='ProfileEditSection'>
        <div className='ImageStack'>
          <img className='ProfileImage' src='https://blog.kakaocdn.net/dn/ebWknC/btrGRkjOw9P/YfnxOV9URkIWxq1mOV8lRK/img.png'></img>
          <img className='ProfileAddImage' src='https://blog.kakaocdn.net/dn/bYBb7H/btrGRkxnKTR/tgpJywvzqFKTgaCZklwms0/img.png'></img>
        </div>
      </div>
      <div>
        <h3 className='MyLibraryBlock'>My Library</h3>
        <div className='BookList'>
          <BookName></BookName><BookName></BookName>
          <BookName></BookName><BookName></BookName>
        </div>
      </div>
      <div>
        <Grass></Grass>
      </div>
    </>
  )
}

export default App;
