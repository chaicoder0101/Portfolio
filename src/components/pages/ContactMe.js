import React, { Fragment } from 'react';

export default class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status : ''
		};
	}

	render() {
		const { status } = this.state;
		return (
			<Fragment>
				{/* <div className='social-links'>
					<h4 style={{ color: 'black' }}>E-Mail : gyurmey1835@gmail.com</h4>

					<a href='https://github.com/gyurmey' rel='noopener noreferrer' target='_blank'>
						<i className='fa fa-github-square' aria-hidden='true' />
					</a>
				</div> */}
				<div className='notify'>
					{' '}
					{status === 'SUCCESS' && <p>Thanks! Will get back to you soon...</p>}
					{status === 'ERROR' && <p>Ooops! There was an error.</p>}
				</div>

				<form onSubmit={this.submitForm} action='https://formspree.io/f/mnqoyajp' method='post'>
					<div class='form-group'>
						<label for='exampleFormControlInput1'>Name :</label>
						<input type='name' class='form-control' id='exampleFormControlInput1' name='name' />
					</div>
					<div class='form-group'>
						<label for='exampleFormControlInput1'>Email address :</label>
						<input
							type='email'
							class='form-control'
							id='exampleFormControlInput1'
							placeholder='name@example.com'
							name='email'
						/>
					</div>
					<div class='form-group'>
						<label for='exampleFormControlTextarea1'>Message :</label>
						<textarea class='form-control' id='exampleFormControlTextarea1' rows='3' name='message' />
					</div>
					<div class='form-group'>
						<label for='exampleFormControlInput1'>Country :</label>
						<input type='country' class='form-control' id='exampleFormControlInput1' name='country' />
					</div>
					<button type='submit' value='submit' class='btn btn-success'>
						Submit
					</button>
				</form>
			</Fragment>
		);
	}

	submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: 'SUCCESS' });
			} else {
				this.setState({ status: 'ERROR' });
			}
		};
		xhr.send(data);
	}
}
