import React, { Fragment } from 'react';
import '../../App.css';

const Projects = () => {
	return (
		<Fragment>
			<div className="projects ">
				<div className="card" style={{ flex: '0 1 15%', 'margin-top': '10rem', 'margin-left': '7rem' }}>
					<div className="card-body">
						<img src={require('../../github.png')} className="card-img-top" alt="ServerSideApp" />

						<h5 className="card-title">User Experience Sampling</h5>
						<p className="card-text">A Context Aware Experience Sampling Server Side App.</p>
						<a
							href="https://github.com/gyurmey/User-experience-sampling-/tree/master/ServersideApp"
							className="btn btn-primary">
							GitHub
						</a>
					</div>
				</div>

				<div className="card" style={{ flex: '0 1 15%', 'margin-top': '10rem', 'margin-left': '7rem' }}>
					<div className="card-body">
						<img src={require('../../github.png')} className="card-img-top" alt="Voting App" />
						<h5 className="card-title">University Polling App</h5>
						<p className="card-text">
							A Secure E-Voting prototype inspired from Neuchâtel protocol with return codes
						</p>
						<a href="https://github.com/gyurmey/university-voting-web-app" className="btn btn-primary">
							GitHub
						</a>
					</div>
				</div>

				<div className="card" style={{ flex: '0 1 15%', 'margin-top': '10rem', 'margin-left': '7rem' }}>
					<div className="card-body">
						<img src={require('../../github.png')} className="card-img-top" alt="Info logger" />
						<h5 className="card-title">Contact-Info logger</h5>
						<p className="card-text">
							A MERN stack application to add contact information with authentication.
						</p>
						<a href="https://github.com/gyurmey/contact-info-logger" className="btn btn-primary">
							GitHub
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;
