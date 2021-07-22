import React from 'react';
import { useAuth } from '../contexts/authContext';
import { Link } from 'react-router-dom';

const Home = () => {
	const { currentUser } = useAuth();

	return (
		<div>
			{currentUser ? (
				<>
					<p><strong>Name:</strong> {currentUser.name}</p>
					<p><strong>Email address:</strong> {currentUser.email}</p>
					<p><strong>Username:</strong> {currentUser.username}</p>
				</>
			) : (
				<>
					<p>No current user</p>
					<Link className="link " to="/signup">Sign Up</Link>
				</>
			)}
		</div>
	)
}

export default Home;