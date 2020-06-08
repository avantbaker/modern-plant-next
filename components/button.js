import React from 'react'

const Button = React.forwardRef(({ type = 'primary', text, href, onClick, className }, ref) => (
    <button
      ref={ref}
      href={href}
      onClick={onClick}
      className={`btn btn-${type} heading-6 ${className}`}
    >
      {text}
    </button>
));

export default Button