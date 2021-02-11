import React from 'react';
import Typical from 'react-typical';
import '../../App.css';

const main = () => {
	return (
		<div className='TypeWriter'>
			<h1>
				Tenzin Gyurmey The {' '}
				<Typical
					loop={Infinity}
					wrapper='b'
					steps={[
						'Developer',
						1000,
						'Designer',
						1000,
						'Programmer',
						1000
					]}
				/>
			</h1>
		</div>
	);
};
export default main;
