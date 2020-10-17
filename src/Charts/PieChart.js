import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}]
};

const PieChart = (props) => {

	return (
		//   <div style={{backgroundColor:"white"}}>

		<Pie data={data} options={{ maintainAspectRatio: false }} />
		//   </div>
	);
}

export default PieChart