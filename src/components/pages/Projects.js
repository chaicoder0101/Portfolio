import React, { Fragment } from 'react';
import '../../App.css';

const Projects = () => {
	return (
		<Fragment>
			<div className='projects '>
				<div className='card' style={{ flex: '0 1 15%', 'margin-top': '10rem', 'margin-left': '7rem' }}>
					<div className='card-body d-flex flex-column'>
						<img src={require('../../github.png')} className='card-img-top' alt='ServerSideApp' />

						<h5 className='card-title'>User Experience Sampling</h5>
						<p className='card-text'>A Context Aware Experience Sampling Server Side App.</p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/gyurmey/Context-Aware-Experience-Sampling'
							className='btn btn-primary mt-auto'
						>
							GitHub
						</a>
					</div>
				</div>

				<div className='card' style={{ flex: '0 1 15%', 'margin-top': '10rem', 'margin-left': '7rem' }}>
					<div className='card-body d-flex flex-column'>
						<img src={require('../../github.png')} className='card-img-top' alt='Voting App' />
						<h5 className='card-title'>University Polling App</h5>
						<p className='card-text'>
							A Secure E-Voting prototype inspired from Neuchâtel protocol with return codes
						</p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/gyurmey/university-voting-web-app'
							className='btn btn-primary mt-auto'
						>
							GitHub
						</a>
					</div>
				</div>

				<div className='card' style={{ flex: '0 1 15%', 'margin-top': '10rem', 'margin-left': '7rem' }}>
					<div className='card-body d-flex flex-column'>
						<img src={require('../../github.png')} className='card-img-top' alt='camera PWA' />
						<h5 className='card-title'>Camera PWA</h5>
						<p className='card-text'>A Full-stack PWA built using react and node in Typescript.</p>
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/gyurmey/camera-PWA'
							className='btn btn-primary mt-auto'
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;
