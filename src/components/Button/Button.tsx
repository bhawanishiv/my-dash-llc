import cx from 'classnames'
import React from 'react'

export interface ButtonProps {
  className?: string
  type?: 'button' | 'submit'
  color: 'primary' | 'secondary'
  variant: 'text' | 'contained' | 'outlined'
  children: any
  onClick?: (e: any) => void
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, type = 'button', variant, color, children, onClick } = props

  const renderButton = () => {
    return (
      <button type={type} className={cx(`md-btn__${variant}`, color, className)} onClick={onClick}>
        {children}
      </button>
    )
  }

  return renderButton()
}

export default Button
