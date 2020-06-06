import React from 'react'

const Input = ({
    className = '',
    inputClass = '',
    placeholder = '',
    type = 'text'
}) => {
    return (
        <div className={`input input__field-wrapper ${className}`}>
            <input className={`input__field ${inputClass}`} type={type} placeholder={placeholder} />
        </div>
    )
};

export default Input;
