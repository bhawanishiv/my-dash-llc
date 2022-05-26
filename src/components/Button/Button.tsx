import cx from 'classnames'
import React from 'react'

export interface ButtonProps {
  className?: string
  color: 'primary' | 'secondary'
  variant: 'text' | 'contained' | 'outlined'
  children: any
}

const Button: React.FC<ButtonProps> = (props) => {
  const { className, variant, color, children } = props

  const renderButton = () => {
    return <button className={cx(`md-btn__${variant}`, color, className)}>{children}</button>
  }

  return renderButton()
}

export default Button
