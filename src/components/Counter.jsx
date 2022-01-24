/** @format */

import React from 'react';

function Counter({ count, onIncreament, onDecreament, onDelete }) {
	const fromatCount = () => (count.value === 0 ? 'Zero' : count.value);

	const getBadgeClasses = () => {
		let classes = 'badge mr-2 badge-';
		classes += count.value === 0 ? 'warning' : 'primary';
		return classes;
	};

	return (
		<div className='container-fluid py-2'>
			<div className='row'>
				<div className='col-2'>
					<span className={getBadgeClasses()}>{fromatCount()}</span>
				</div>
				<div className='col-2'>
					<button
						onClick={() => onIncreament(count)}
						className='btn btn-secondary'>
						+
					</button>
				</div>
				<div className='col-2'>
					<button
						onClick={() => onDecreament(count)}
						className='btn btn-secondary'
						disabled={count.value < 1 ? true : false}>
						-
					</button>
				</div>
				<div className='col-2'>
					<button onClick={() => onDelete(count.id)} className='btn btn-danger'>
						x
					</button>
				</div>
			</div>
		</div>
	);
}

export default Counter;
