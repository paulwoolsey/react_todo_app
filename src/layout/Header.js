import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
	<header className="header">
		<h1>To Do List</h1>
		<Link className="link" to="/">Home </Link> | <Link className="link" to="/about">About </Link>
	</header>
  );
}

export default Header;