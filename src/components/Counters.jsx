/** @format */

import React, { useState } from 'react';
import Counter from './Counter';

function Counters() {
	const [state, setState] = useState({
		counters: [
			{
				id: 1,
				value: 4,
			},
			{
				id: 2,
				value: 0,
			},
			{
				id: 3,
				value: 0,
			},
			{
				id: 4,
				value: 0,
			},
		],
	});

	const handleIncreament = (counter) => {
		const counters = [...state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		setState({ counters: counters });
	};

	const handleDelete = (count) => {
		const counters = state.counters.filter((m) => m.id !== count);
		setState({ counters });
	};

	const handleReset = () => {
		const counters = state.counters.map((m) => {
			m.value = 0;
			console.log(m);
			return m;
		});
		setState({ counters });
	};

	return (
		<div>
			<button
				onClick={() => handleReset()}
				className='btn btn-primary btn-small m-2'>
				Rest
			</button>
			{state.counters &&
				state.counters.map((count) => (
					<Counter
						key={count.id}
						onDelete={handleDelete}
						count={count}
						onIncreament={handleIncreament}
					/>
				))}
		</div>
	);
}

export default Counters;
