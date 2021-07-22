import React, { useContext, useState } from 'react'

const {
	SERVER_HOST = 'localhost',
	SERVER_PORT = 5000
} = process.env;

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const signUp = async (name, email, username, password) => {
		try {
			const response = await fetch(`http://${SERVER_HOST}:${SERVER_PORT}/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, username, password })
			});

			if (!response.ok) throw new Error(response.body);

			const user = await response.json();
			setCurrentUser(user);
		} catch (error) {
			throw new Error(error);
		}
	}

	const login = async (username, password) => {
		try {
			const response = await fetch(`http://${SERVER_HOST}:${SERVER_PORT}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			if (!response.ok) throw new Error(response.body);

			const user = await response.json();
			setCurrentUser(user);
		} catch (error) {
			throw new Error(error);
		}
	}

	const providerValue = { currentUser, signUp, login };

	return (
		<AuthContext.Provider value={providerValue}>
			{children}
		</AuthContext.Provider>
	)
}