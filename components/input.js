import React from 'react'

const Input = ({
    className = '',
    inputClass = '',
    placeholder = '',
    type = 'text'
}) => {
    let component = type !== 'textarea' ? (
        <input className={`input__field ${inputClass}`} type={type} placeholder={placeholder} />
    ) : (
        <textarea className={`input__field ${inputClass}`} rows={8} type={type} placeholder={placeholder} />
    )
    return (
        <div className={`input input__field-wrapper ${className}`}>
            {component}
        </div>
    )
};

export default Input;
