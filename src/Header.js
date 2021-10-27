import { Search } from '@mui/icons-material';
import React from 'react';
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left"></div>
      <div className="header__right">
        <Search />
        <input
          placeholder=""
        />
      </div>
    </div>
  )
}

export default Header
