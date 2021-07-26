import React, { useContext, useState } from 'react'

const {
	REACT_APP_SERVER_ADDRESS = 'http://localhost:5000',
} = process.env;

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

	const signUp = async (signUpData) => {
		const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(signUpData)
		});

		if (response.ok) {
			const user = await response.json();
			setCurrentUser(user);
		} else {
			const error = await response.json();
			throw error;
		}
	}

	const login = async (loginCreds) => {
		const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loginCreds)
		});

		if (response.ok) {
			const user = await response.json();
			setCurrentUser(user);
		} else {
			const error = await response.json();
			throw error;
		}
	}

	const logout = async () => {
		const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/logout`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			setCurrentUser(null);
		} else {
			const error = await response.json();
			throw error;
		}
	}

	const providerValue = { currentUser, signUp, login, logout };

	return (
		<AuthContext.Provider value={providerValue}>
			{children}
		</AuthContext.Provider>
	)
}