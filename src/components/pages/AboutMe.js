import React from 'react';

const AboutMe = () => {
	return (
		<div className='accordion' id='accordionExample' style={{ 'margin-top': '2rem' }}>
			<div className='card'>
				<div className='card-header' id='headingOne'>
					<h2 className='mb-0'>
						<button
							className='btn btn-link'
							type='button'
							data-toggle='collapse'
							data-target='#collapseOne'
							aria-expanded='true'
							aria-controls='collapseOne'
						>
							<h4 className='title'> Education </h4>
						</button>
					</h2>
				</div>

				<div
					id='collapseOne'
					className='collapse show'
					aria-labelledby='headingOne'
					data-parent='#accordionExample'
				>
					<div className='card-body'>
						<li>B.Tech in Computer Science Engineering.</li>
						<li>Msc in International Software System Science.</li>
					</div>
				</div>
			</div>
			<div className='card'>
				<div className='card-header' id='headingTwo'>
					<h2 className='mb-0'>
						<button
							className='btn btn-link collapsed'
							type='button'
							data-toggle='collapse'
							data-target='#collapseTwo'
							aria-expanded='false'
							aria-controls='collapseTwo'
						>
							<h4 className='title'> Achievements</h4>
						</button>
					</h2>
				</div>
				<div id='collapseTwo' className='collapse' aria-labelledby='headingTwo' data-parent='#accordionExample'>
					<div className='card-body'>
						{/* <li>
							Selected to attend in "GOING BEYOND" live interaction with Astronaut Sunita Williams
							organized by Atlantis Research in collaboration with American center, New Delhi.
						</li>
						<li>Ranked 1st in Department of education's Engineering Entrance.</li>
						<li>Ranked 2nd in Department of education's Medical Entrance Test.</li> */}
						<li>Ranked 1st in State level engineering </li>
					</div>
				</div>
			</div>
			{/* <div className='card'>
				<div className='card-header' id='headingThree'>
					<h2 className='mb-0'>
						<button
							className='btn btn-link collapsed'
							type='button'
							data-toggle='collapse'
							data-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
						>
							<h4 className='title'>Interest and Hobbies </h4>
						</button>
					</h2>
				</div>
				<div
					id='collapseThree'
					className='collapse'
					aria-labelledby='headingThree'
					data-parent='#accordionExample'
				>
					<div className='card-body'>
						<li>To develop creative application in web development.</li>
						<li>Learn about the latest Technology in web development.</li>
					</div>
				</div>
			</div> */}

			{/* <div className='card'>
				<div className='card-header' id='headingThree'>
					<h2 className='mb-0'>
						<button
							className='btn btn-link collapsed'
							type='button'
							data-toggle='collapse'
							data-target='#collapseThree'
							aria-expanded='false'
							aria-controls='collapseThree'
						>
							<h4 className='title'> Skills / Persona </h4>
						</button>
					</h2>
				</div>
				<div
					id='collapseThree'
					className='collapse'
					aria-labelledby='headingThree'
					data-parent='#accordionExample'
				>
					<div className='card-body'>
						<li>Excellent management skills.</li>
						<li>Good programming skills.</li>
						<li>Fast learner</li>
						<li>Motivated spirit</li>
						<li>Focused attitude</li>
						<li>Extremely good work ethic.</li>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default AboutMe;
