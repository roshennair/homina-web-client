import React, { useState } from "react";

const FormField = React.forwardRef(({ label, name, type }, inputRef) => {
	const [isActive, setIsActive] = useState(false);

	const handleBlur = () => {
		if (inputRef.current.value === '') {
			setIsActive(false);
		}
	}

	return (
		<div
			className={`form-field ${isActive ? 'active' : ''}`}
			onFocus={() => setIsActive(true)}
			onBlur={handleBlur}
		>
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				ref={inputRef}
			/>
		</div>
	);
});

FormField.defaultProps = {
	type: 'text',
	value: ''
}

export default FormField;