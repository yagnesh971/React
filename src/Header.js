import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props) {
  return (
    <div className="Header">
      <span>Hello {props.firstName}</span>
    </div>
  );
}

export default Header;
