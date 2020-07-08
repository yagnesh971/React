import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  const modify = () => {
    console.log('Hello');
  }
  return (
    <div className="Header">
      <span>Hello {props.firstName}</span>
      <button onClick={() => modify()}>Test</button>
    </div>
  );
}

export default Header;
