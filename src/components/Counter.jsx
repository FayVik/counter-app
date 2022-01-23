/** @format */

import React from 'react';

function Counter(props) {
	const fromatCount = () =>
		props.count.value === 0 ? 'Zero' : props.count.value;

	const getBadgeClasses = () => {
		let classes = 'badge mr-2 badge-';
		classes += props.count.value === 0 ? 'warning' : 'primary';
		return classes;
	};

	return (
		<div className='container-fluid py-2'>
			<span className={getBadgeClasses()}>{fromatCount()}</span>
			<button
				onClick={() => props.onIncreament(props.count)}
				className='btn btn-secondary mr-2'>
				Increament
			</button>
			<button
				onClick={() => props.onDelete(props.count.id)}
				className='btn btn-danger'>
				Delete
			</button>
		</div>
	);
}

export default Counter;
