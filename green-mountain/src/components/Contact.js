import React from 'react';
import './Contact.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact(props) {
	const navigate = useNavigate();
	const [inquiry, setInquiry] = useState({
		name: '',
		email: '',
		comments: '',
	});

	const handleChange = (event) => {
		setInquiry({ ...inquiry, [event.target.id]: event.target.value });
	};

	const createNewInquiry = () => {
		axios
			.post('https://gtp-backend.herokuapp.com/inquiries', inquiry)
			.then((res) => {
				console.log(res);
				navigate('/');
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your POST fetch() or axios() request here
		createNewInquiry();
	};

	return (
		<div className='contact__div'>
			<div className='contact__heroimg'></div>
			<h2 className='contact__h2'>Contact Us</h2>

			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>
					<span className='contact__span'>Name </span> (required)
				</label>
				<br />
				<input
					onChange={handleChange}
					id='name'
					value={inquiry.name}
					placeholder='Name'
					type='text'
					required={true}
				/>

				<br />
				<label htmlFor='email'>
					<span className='contact__span'>Email </span> (required)
				</label>
				<br />
				<input
					onChange={handleChange}
					id='email'
					value={inquiry.email}
					placeholder='email'
					type='email'
					required={true}
				/>

				<br />
				<label htmlFor='comments'>
					<span className='contact__span'>Comment </span> (required)
				</label>
				<br />
				<input
					className='contact__inputcomment'
					onChange={handleChange}
					id='comments'
					value={inquiry.comments}
					placeholder='comments'
					type='text'
					required={true}
				/>
				<br />
				<button className='contact__btn'>Submit</button>
			</form>
		</div>
	);
}

export default Contact;
