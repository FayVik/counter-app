/** @format */

import React from 'react';

const Navbar = ({ totalCounters }) => {
	return (
		<div>
			<nav className='navbar navbar-light bg-light'>
				<h1 className='navbar-brand mb-0 '>
					Count state
					<span className='badge badge-secondary ml-2'>{totalCounters}</span>
				</h1>
			</nav>
		</div>
	);
};

export default Navbar;
