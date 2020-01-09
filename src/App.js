import React, { Fragment } from 'react';
import './App.css';
import Main from './components/layout/main';
import NavBar from './components/navbar/navBar';

function App() {
	return (
		<Fragment>
			<div className="container">
				<NavBar />
				{/* <Main /> */}
			</div>
		</Fragment>
	);
}

export default App;
