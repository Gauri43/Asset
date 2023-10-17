import React, { Component } from 'react';
import axios from 'axios';
import ApiService from '../../service/ApiService';

class UserLoginComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleLogin = async (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		const loginData = {
			username,
			password,
		};

		// Send an HTTP POST request to the backend
		try {
			// eslint-disable-next-line no-undef
			const response = await axios.post('http://localhost:8081/api/authenticate/login', loginData);

			if (response.status === 200) {
				// Successful login, process the JWT token
				const token = response.data.token;

				// Store the token (e.g., in local storage or a cookie)
				localStorage.setItem('token', token);

				// Redirect to a protected route or perform other actions
				localStorage.setItem('authenticated', 'true');
				this.props.history.push('/assets');
			} else {
				// Handle login failure (e.g., show an error message)
				console.log("&*&* Login FAILED &*&*");
			}
		} catch (error) {
			// Handle network or other errors
			console.error('Login failed:', error);
		}



		/*	if (username === 'user' && password === 'password') {
		  localStorage.setItem('authenticated', 'true');
		  this.props.history.push('/assets'); 
		}
		*/
	};

	render() {
		return (
			<div>
				<h2 className="text-center">User Login</h2>
				<form onSubmit={this.handleLogin}>
					<div className="form-group">
						<label>Username:</label>
						<input
							type="text"
							name="username"
							className="form-control"
							value={this.state.username}
							onChange={this.handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label>Password:</label>
						<input
							type="password"
							name="password"
							className="form-control"
							value={this.state.password}
							onChange={this.handleInputChange}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Login
					</button>
				</form>
			</div>
		);
	}
}

export default UserLoginComponent;
