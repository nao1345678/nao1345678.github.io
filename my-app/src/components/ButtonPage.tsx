import React from 'react'

export type IButton = {}

const Button = ({}: IButton) => {
  return (
    <div className="Button">
      <a href="#">
        <img src="ScrollUp.svg" alt="Back to top" />
      </a>
    </div>
  )
}

export default Button
