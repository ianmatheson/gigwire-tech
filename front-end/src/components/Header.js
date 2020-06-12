import React from 'react';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <a href="">
            <img src={require('../images/logo-white.png')} className="logo" />
          </a>
          <a href="" >
            <button className="InviteButton">
              Invite Members
            </button>
          </a>
          <a href="">
            <img src={require('../images/profilePic.png')} className="profile" />
          </a>
        </ul>
      </div>
    );
  }
}

export default Header;