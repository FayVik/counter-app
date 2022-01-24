/** @format */

import React, { useState } from 'react';
import Counters from './components/Counters';
import Navbar from './components/Navbar';

function App() {
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

	const handDecreament = (counter) => {
		const counters = [...state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		setState({ counters: counters });
	};

	const handleDelete = (count) => {
		const counters = state.counters.filter((m) => m.id !== count);
		setState({ counters });
	};

	const handleReset = () => {
		const counters = state.counters.map((m) => {
			m.value = 0;
			return m;
		});
		setState({ counters });
	};
	return (
		<div className='container-fluid'>
			<Navbar
				totalCounters={state.counters.filter((h) => h.value > 0).length}
			/>
			<main className=''>
				<Counters
					counters={state.counters}
					onReset={handleReset}
					onIncreament={handleIncreament}
					onDelete={handleDelete}
					onDecreament={handDecreament}
				/>
			</main>
		</div>
	);
}

export default App;
