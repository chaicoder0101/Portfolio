import React from 'react';

const navBar = () => {
	return (
		<div className="pos-f-t">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Why Hire Me?
				</a>
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
						<a class="nav-item nav-link active" href="#">
							About Me <span class="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							Projects
						</a>
						<a className="nav-item nav-link" href="#">
							Contact Me
						</a>
						<a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
							Testimonials
						</a>
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
