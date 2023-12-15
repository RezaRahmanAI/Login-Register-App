import React from 'react'

const Input = (props) => {
  const { type, placeholder, onChange, value } = props

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
