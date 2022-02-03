import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (
          <ul style={{listStyleType: "none", margin: 10, padding: 5, background: "blue"}}>
            <li style={{display:"inline-block"}}><Link to='/' style={{textDecoration:"none", color: "black", margin: 10, padding: 5}}>Exercise Tracker</Link></li>
            <li style={{display:"inline-block"}}><Link to='/user' style={{textDecoration:"none", color: "black", margin: 10, padding: 5}}>Create User</Link></li>
            <li style={{display:"inline-block"}}><Link to='/user' style={{textDecoration:"none", color: "black", margin: 10, padding: 5}}>Create User</Link></li>
            <li style={{display:"inline-block"}}><Link to='/create' style={{textDecoration:"none", color: "black", margin: 10, padding: 5}}>Create Exercise Log</Link></li>
          </ul>
    )
  }
}

export default Navbar;