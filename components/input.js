import React from 'react'

const Input = ({
    className = '',
    inputClass = '',
    placeholder = '',
    type = 'text',
    onChange,
    name,
    value,
    min = null,
}) => {
    let component = type !== 'textarea' ? (
        <input className={`input__field ${inputClass}`} type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} min={min} />
    ) : (
        <textarea className={`input__field ${inputClass}`} rows={8} type={type} placeholder={placeholder} name={name} value={value} />
    )
    return (
        <div className={`input input__field-wrapper ${className}`}>
            {component}
        </div>
    )
};

export default Input;
