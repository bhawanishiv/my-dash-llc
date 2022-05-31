import cx from 'classnames'

import React from 'react'

export interface InputProps {
  label?: string | number
  containerClassName?: string
  className?: string
  name: string
  type: 'email' | 'text' | 'password' | 'number'
  helpText?: string
  value?: any
  /** Error message of the field */
  error?: string
  /** Has the field been visited? */
  touched?: boolean
  /** Initial value of the field */
  initialValue?: any
  /** Initial touched state of the field */
  initialTouched?: boolean
  /** Initial error message of the field */
  initialError?: string
  onChange: (e: any) => void
}

const Input: React.FC<InputProps> = (props) => {
  const {
    containerClassName,
    className,
    name,
    label,
    type,
    helpText,
    error,
    touched,
    ...restProps
  } = props

  const id = `input-${name}`

  const renderInput = () => {
    return (
      <div className={cx('md-input__container', label && '--md-with-label', containerClassName)}>
        {label && (
          <label className='md-input__label' htmlFor={id}>
            {label}
          </label>
        )}
        <input
          id={id}
          name={name}
          className={cx('md-input', className)}
          type={type}
          {...restProps}
        />
        {touched && (
          <span className={cx('md-input__message', error && 'error')}>{helpText || error}</span>
        )}
      </div>
    )
  }

  return renderInput()
}

export default Input
