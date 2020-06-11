import React from 'react';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><a href="profile.asp">Profile</a></li>
          <li><a href="">GigWire</a></li>
          <li style={{"float":"right"}}><a href="profile.asp">Invite Members</a></li>
        </ul>      
      </div>
    );
  }
}

export default Header;