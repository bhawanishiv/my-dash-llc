import cx from 'classnames'

import React from 'react'

export interface CheckBoxProps {
  containerClassName?: string
  className?: string
  name: string
  helpText?: string
  children: any
  value: any
  /** Error message of the field */
  error?: string
  /** Has the field been visited? */
  touched: boolean
  /** Initial value of the field */
  initialValue?: any
  /** Initial touched state of the field */
  initialTouched: boolean
  /** Initial error message of the field */
  initialError?: string
  onChange: (e: any) => void
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { containerClassName, className, name, children, helpText, error, touched, ...restProps } =
    props
  const id = `checkBox-${name}`
  const renderCheckBox = () => {
    return (
      <div className={cx('md-checkbox__container', containerClassName)}>
        <input
          type='checkbox'
          id={id}
          name={name}
          className={cx('md-checkbox', className)}
          {...restProps}
        />
        {children && (
          <label className='md-checkbox__label' htmlFor={id}>
            {children}
          </label>
        )}
        {touched && (
          <span className={cx('md-input__message', error && 'error')}>{helpText || error}</span>
        )}
      </div>
    )
  }

  return renderCheckBox()
}

export default CheckBox
