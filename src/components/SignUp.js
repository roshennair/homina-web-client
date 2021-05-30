import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormField from './FormField';

const SignUp = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', username: '', password: '' });

    let isDisabled = false;
    for (let field in formValues) {
        if (formValues[field] === '') isDisabled = true;
    }

    const handleFormChange = event => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const newRegistration = { ...formValues };
        await fetch('http://localhost:3001/sign-up', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRegistration)
        });
        setFormValues({ name: '', email: '', username: '', password: '' });
    }

    return (
        <div className="form-container">
            <div className="form-header">
                <svg className="form-logo" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 630 630"><path d="M104.89,0h-.74A105,105,0,1,0,210,105v-1.14A105,105,0,0,0,104.89,0ZM210,105v.57A105,105,0,0,0,420,105v-1.14A105,105,0,0,0,210,105Zm210,0v.57A105,105,0,0,0,630,105v-1.14A105,105,0,0,0,420,105ZM104.89,210h-.74A105,105,0,1,0,210,315v-1.14A105,105,0,0,0,104.89,210ZM210,315v.57A105,105,0,0,0,420,315v-1.14A105,105,0,0,0,210,315Zm210,0v.57A105,105,0,0,0,630,315v-1.14A105,105,0,0,0,420,315ZM104.89,420h-.74A105,105,0,1,0,210,525v-1.14A105,105,0,0,0,104.89,420ZM210,525v.57A105,105,0,0,0,420,525v-1.14A105,105,0,0,0,210,525Zm210,0v.57A105,105,0,0,0,630,525v-1.14A105,105,0,0,0,420,525Z" transform="translate(0 0)" fill="#ffce1f" /></svg>
                <p className="form-title">Sign Up</p>
            </div>
            <form className="form" method="post" onSubmit={handleFormSubmit}>
                <FormField label="Name" name="name" value={formValues.name} changeHandler={handleFormChange} />
                <FormField label="Email address" name="email" type="email" value={formValues.email} changeHandler={handleFormChange} />
                <FormField label="Username" name="username" value={formValues.username} changeHandler={handleFormChange} />
                <FormField label="Password" name="password" type="password" value={formValues.password} changeHandler={handleFormChange} />

                <div className="form-links">
                    <Link className="link" to="/login">Login instead?</Link>
                    <input className={`primary-button ${isDisabled ? 'disabled' : ''}`} type="submit" value="Sign Up" onChange={handleFormChange} disabled={isDisabled} />
                </div>
            </form>
        </div>
    );
}

export default SignUp;