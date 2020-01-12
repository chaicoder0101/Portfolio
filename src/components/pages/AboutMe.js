import React from 'react';

const AboutMe = () => {
	return (
		<div class="accordion" id="accordionExample" style={{ 'margin-top': '2rem' }}>
			<div class="card">
				<div class="card-header" id="headingOne">
					<h2 class="mb-0">
						<button
							class="btn btn-link"
							type="button"
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne">
							<h4> Education </h4>
						</button>
					</h2>
				</div>

				<div
					id="collapseOne"
					class="collapse show"
					aria-labelledby="headingOne"
					data-parent="#accordionExample">
					<div class="card-body">
						<li>B.Tech in Computer Science Engineering.</li>
						<li>Msc in International Software System Science.</li>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header" id="headingTwo">
					<h2 class="mb-0">
						<button
							class="btn btn-link collapsed"
							type="button"
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo">
							<h4> Achievements</h4>
						</button>
					</h2>
				</div>
				<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
					<div class="card-body">
						<li>
							Selected to attend in "GOING BEYOND" live interaction with Astronaut Sunita Williams
							organized by Atlantis Research in collaboration with American center, New Delhi.
						</li>
						<li>Ranked 1st in Department of education's Engineering Entrance.</li>
						<li>Ranked 2nd in Department of education's Medical Entrance Test.</li>
						<li>Ranked 1st in State level engineering pre-entrance Test</li>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header" id="headingThree">
					<h2 class="mb-0">
						<button
							class="btn btn-link collapsed"
							type="button"
							data-toggle="collapse"
							data-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree">
							<h4>Interest and Hobbies </h4>
						</button>
					</h2>
				</div>
				<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
					<div class="card-body">
						<li>To develop creative application in web development.</li>
						<li>Learn about the latest Technology in web development.</li>
						<li>Playing guitar and participating in jam sessions.</li>
					</div>
				</div>
			</div>

			<div class="card">
				<div class="card-header" id="headingThree">
					<h2 class="mb-0">
						<button
							class="btn btn-link collapsed"
							type="button"
							data-toggle="collapse"
							data-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseThree">
							<h4> Skills / Persona </h4>
						</button>
					</h2>
				</div>
				<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
					<div class="card-body">
						<li>Excellent management skills.</li>
						<li>Good programming skills.</li>
						<li>Fast learner</li>
						<li>Motivated spirit</li>
						<li>Focused attitude</li>
						<li>Extremely good work ethic.</li>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
