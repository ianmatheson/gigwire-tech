import React from 'react';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <a href="">
            <img src={require('../images/logo-white.png')} className="logo" alt=""/>
          </a>
          <a href="" >
            <button className="InviteButton">
              Invite Members
            </button>
          </a>
          <a href="">
            <img src={require('../images/profilePic.png')} className="profile" alt=""/>
          </a>
        </ul>
      </div>
    );
  }
}

export default Header;