/** @format */

import React from 'react';
import Counter from './Counter';

function Counters({ onReset, counters, onDelete, onIncreament, onDecreament }) {
	return (
		<div>
			<button onClick={onReset} className='btn btn-primary btn-small m-2'>
				Rest
			</button>
			{counters &&
				counters.map((count) => (
					<Counter
						key={count.id}
						onDelete={onDelete}
						count={count}
						onIncreament={onIncreament}
						onDecreament={onDecreament}
					/>
				))}
		</div>
	);
}

export default Counters;
