import React, { useContext, useState, useEffect } from 'react'

const {
	REACT_APP_SERVER_ADDRESS = 'http://localhost:5000',
} = process.env;

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null);

	useEffect(() => {
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}, [currentUser]);

	const signUp = async (signUpData) => {
		const response = await fetch(`${REACT_APP_SERVER_ADDRESS}/signup`, {
			method: 'POST',
			credentials: 'include',
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
			credentials: 'include',
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
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			setCurrentUser(null);
			localStorage.removeItem('currentUser');
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