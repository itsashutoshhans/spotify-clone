import { Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for artists, songs, or podcast"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]} alt="AH"/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
