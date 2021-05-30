import { useState, useRef } from "react";

const FormField = ({ label, name, hideContents, changeHandler }) => {
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
            <input type={hideContents ? 'password' : 'text'} id={name} name={name} onChange={changeHandler} ref={inputRef} />
        </div>
    );
}

FormField.defaultProps = {
    hideContents: false
}

export default FormField;