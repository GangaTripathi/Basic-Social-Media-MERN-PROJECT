import React from "react";
import { Link } from "react-router-dom";

 

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">📸 SnapFeed</h2>

      <div className="nav-links">
        <Link to="/feed">Feed</Link>
        <Link to="/create-post">Create Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;