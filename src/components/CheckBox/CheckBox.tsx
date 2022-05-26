import cx from 'classnames'

import React from 'react'

export interface CheckBoxProps {
  containerClassName?: string
  className?: string
  name: string
  children: any
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { containerClassName, className, name, children } = props
  const id = `checkBox-${name}`
  const renderCheckBox = () => {
    return (
      <div className={cx('md-checkbox__container', containerClassName)}>
        <input type='checkbox' id={id} name={name} className={cx('md-checkbox', className)} />
        {children && (
          <label className='md-checkbox__label' htmlFor={id}>
            {children}
          </label>
        )}
      </div>
    )
  }

  return renderCheckBox()
}

export default CheckBox
