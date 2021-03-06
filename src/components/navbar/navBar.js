import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => {
	return (
		<div className='pos-f-t'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<Link className='navbar-brand' to='/'>
					Why Hire Me?
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
					<div className='navbar-nav'>
						<Link class='nav-item nav-link active' to='AboutMe'>
							About Me <span class='sr-only'>(current)</span>
						</Link>
						<Link className='nav-item nav-link' to='Projects'>
							Projects
						</Link>
						<Link className='nav-item nav-link' to='ContactMe'>
							Contact Me
						</Link>
						<Link className='nav-item nav-link ' to='Testimonials'>
							Testimonials
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default navBar;
