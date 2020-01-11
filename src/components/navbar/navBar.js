import React from 'react';
import { Link } from 'react-router-dom';

const navBar = () => {
	return (
		<div className="pos-f-t">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					Why Hire Me?
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link class="nav-item nav-link active" to="AboutMe">
							About Me <span class="sr-only">(current)</span>
						</Link>
						<Link className="nav-item nav-link" to="Projects">
							Projects
						</Link>
						<Link className="nav-item nav-link" to="ContactMe">
							Contact Me
						</Link>
						<Link className="nav-item nav-link " to="Testimonials">
							Testimonials
						</Link>
					</div>
				</div>
			</nav>

			{/* <nav className="navbar navbar-dark bg-dark">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarToggleExternalContent"
					aria-controls="navbarToggleExternalContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
			</nav>
			<div className="collapse" id="navbarToggleExternalContent">
				<div class="bg-dark p-4">
					<h5 className="text-white h4">Collapsed content</h5>
					<span className="text-muted">Toggleable via the navbar brand.</span>
				</div>
			</div> */}
		</div>
	);
};

export default navBar;
