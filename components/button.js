import React from 'react'

const Button = React.forwardRef(({ type = 'primary', text, href, onClick, className, buttonType = "button" }, ref) => (
    <button
      ref={ref}
      href={href}
      onClick={onClick}
      type={buttonType}
      className={`btn btn-${type} heading-6 ${className}`}
    >
      {text}
    </button>
));

export default Button