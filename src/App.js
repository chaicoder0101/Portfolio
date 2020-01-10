import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/layout/main';
import NavBar from './components/navbar/navBar';
import AboutMe from './components/pages/AboutMe';
import Testimonials from './components/pages/Testimonials';
import ContactMe from './components/pages/ContactMe';
import Projects from './components/pages/Projects';

function App() {
	return (
		<div className="container">
			<Router>
				<NavBar />
				<Main />

				<Switch>
					<Route exact path="/AboutMe" component={AboutMe} />
					<Route exact path="/ContactMe" component={ContactMe} />
					<Route exact path="/Projects" component={Projects} />
					<Route exact path="/Testimonials" component={Testimonials} />

					{/* <Route exact path='/about' component={About} /> */}
					{/* <Route exact path='/user/:login' component={User}/> */}
				</Switch>
			</Router>
		</div>
	);
}

export default App;
