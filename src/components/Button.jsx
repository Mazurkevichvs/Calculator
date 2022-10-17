import React from 'react'

const Button = ({className, handleClick, digit, handleKeyPress}) => {

  return (
    <button onKeyDown={() => handleKeyPress()} className={className ? `btn ${className}` : 'btn'} onClick={() => handleClick(digit)}>{digit}</button>
  )
}

export default Button