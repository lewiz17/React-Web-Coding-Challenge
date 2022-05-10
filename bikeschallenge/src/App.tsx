import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import BikeListPage from './views/BikeListPage';
import BikeDetailPage from './views/BikeDetailPage';
import Head from './components/Head';

const App = () => {

	return (
		<>
			<Head />
			<Routes>
				<Route path='/' element={<BikeListPage />} />
				<Route path='/case/:caseID' element={<BikeDetailPage />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
};

const NoMatch = () => {
	return (<p>There's nothing here: 404!</p>);
};

export default App