import cx from 'classnames'

import React from 'react'

export interface InputProps {
  label?: string | number
  containerClassName?: string
  className?: string
  name: string
  type: 'email' | 'text' | 'password' | 'number'
}

const Input: React.FC<InputProps> = (props) => {
  const { containerClassName, className, name, label, type } = props

  const id = `input-${name}`

  const renderInput = () => {
    return (
      <div className={cx('md-input__container', label && '--md-with-label', containerClassName)}>
        {label && (
          <label className='md-input__label' htmlFor={id}>
            {label}
          </label>
        )}
        <input id={id} name={name} className={cx('md-input', className)} type={type} />
      </div>
    )
  }

  return renderInput()
}

export default Input
