import { useState, useRef } from "react";

const FormField = ({ label, name, value, type, changeHandler }) => {
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef(null)

    const handleBlur = () => {
        if (inputRef.current.value === '') {
            setIsActive(false);
        }
    }

    return (
        <div className={`form-field ${isActive ? 'active' : ''}`} onFocus={() => setIsActive(true)} onBlur={handleBlur}>
            <label htmlFor={name}>{label}</label>
            <input type={type} id={name} name={name} value={value} onChange={changeHandler} ref={inputRef} />
        </div>
    );
}

FormField.defaultProps = {
    type: 'text',
    value: ''
}

export default FormField;