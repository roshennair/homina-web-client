import { useRef } from 'react';
import { useAuth } from '../contexts/authContext';
import FormField from '../components/FormField';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
	const nameRef = useRef();
	const emailRef = useRef();
	const usernameRef = useRef();
	const passwordRef = useRef();
	const { signUp } = useAuth();
	const history = useHistory();

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await signUp(
				nameRef.current.value,
				emailRef.current.value,
				usernameRef.current.value,
				passwordRef.current.value
			);
			history.push('/');
		}
		catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="form-container">
			<div className="form-header">
				<svg
					className="form-logo"
					xmlns="http://www.w3.org/2000/svg"
					width="100"
					height="100"
					viewBox="0 0 630 630">
					<path d="M104.89,0h-.74A105,105,0,1,0,210,105v-1.14A105,105,0,0,0,104.89,0ZM210,105v.57A105,105,0,0,0,420,105v-1.14A105,105,0,0,0,210,105Zm210,0v.57A105,105,0,0,0,630,105v-1.14A105,105,0,0,0,420,105ZM104.89,210h-.74A105,105,0,1,0,210,315v-1.14A105,105,0,0,0,104.89,210ZM210,315v.57A105,105,0,0,0,420,315v-1.14A105,105,0,0,0,210,315Zm210,0v.57A105,105,0,0,0,630,315v-1.14A105,105,0,0,0,420,315ZM104.89,420h-.74A105,105,0,1,0,210,525v-1.14A105,105,0,0,0,104.89,420ZM210,525v.57A105,105,0,0,0,420,525v-1.14A105,105,0,0,0,210,525Zm210,0v.57A105,105,0,0,0,630,525v-1.14A105,105,0,0,0,420,525Z" transform="translate(0 0)" fill="#ffce1f" />
				</svg>
				<p className="form-title">Sign Up</p>
			</div>
			<form className="form" method="post" onSubmit={handleFormSubmit}>
				<FormField ref={nameRef} label="Name" name="name" />
				<FormField ref={emailRef} label="Email address" name="email" type="email" />
				<FormField ref={usernameRef} label="Username" name="username" />
				<FormField ref={passwordRef} label="Password" name="password" type="password" />

				<div className="form-links">
					<Link className="link" to="/login">Login instead?</Link>
					<input className="primary-button" type="submit" value="Sign Up" />
				</div>
			</form>
		</div>
	);
}

export default SignUp;