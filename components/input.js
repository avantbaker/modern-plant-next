import React from 'react'

const Input = ({
    className = '',
    inputClass = '',
    placeholder = '',
    type = 'text',
    onChange,
    name,
}) => {
    let component = type !== 'textarea' ? (
        <input className={`input__field ${inputClass}`} type={type} name={name} placeholder={placeholder} onChange={onChange} />
    ) : (
        <textarea className={`input__field ${inputClass}`} rows={8} type={type} placeholder={placeholder} name={name} />
    )
    return (
        <div className={`input input__field-wrapper ${className}`}>
            {component}
        </div>
    )
};

export default Input;
