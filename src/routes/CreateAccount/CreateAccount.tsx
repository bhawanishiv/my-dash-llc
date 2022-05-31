import * as yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import Button from '../../components/Button'
import CheckBox from '../../components/CheckBox'
import Input from '../../components/Input'

export interface CreateAccountProps {
  className?: string
}

const CreateAccount: React.FC<CreateAccountProps> = (props) => {
  const { className } = props

  const navigate = useNavigate()

  const handleFormSubmit = (values: any, handlers: any) => {
    if (values.password !== values.confirmPassword) {
      handlers.setErrors({ confirmPassword: "Passwords did'nt match" })
      return
    }
    navigate('/home')
  }

  const { getFieldProps, getFieldMeta, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      fullName: '',
      phoneNumber: '',
      agreement: true,
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email('Please enter a valid email id')
        .required('Please enter your email id'),
      password: yup.string().required('Please enter a password'),
      confirmPassword: yup.string().required('Please confirm your password'),
      fullName: yup
        .string()
        .matches(/^[a-z\d\-_\s]+$/i, 'Please enter a valid Full name')
        .required('Please enter your full name'),
      phoneNumber: yup
        .string()
        .min(10, 'Please enter a valid 10 digit Phone number')
        .max(10, 'Please enter a valid 10 digit Phone number')
        .matches(new RegExp('^[0-9]*$'), 'Please enter a valid phone number')
        .required('Please enter your phone number'),
      agreement: yup.boolean().required('You need to accept the agreement'),
    }),

    onSubmit: handleFormSubmit,
  })

  const renderCreateAccount = () => {
    return (
      <div className='md-cra__container'>
        <div className='md-cra__app-content'>
          <img className='md-cra__app-image' src='images/my-dash-llc.png' alt='create-account' />
          <div className='md-cra__app-content--info'>
            <h2>Choose a date range</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, asperiores</p>
          </div>
        </div>
        <form noValidate onSubmit={handleSubmit} className='md-cra__form'>
          <h1>Create Account</h1>
          <Input
            {...getFieldProps('email')}
            {...getFieldMeta('email')}
            label='Your email address'
            type='email'
            containerClassName='py-2'
          />
          <Input
            {...getFieldProps('password')}
            {...getFieldMeta('password')}
            label='Your password'
            type='text'
            containerClassName='py-2'
          />
          <Input
            {...getFieldProps('confirmPassword')}
            {...getFieldMeta('confirmPassword')}
            label='Confirm your password'
            type='text'
            containerClassName='py-2'
          />
          <Input
            {...getFieldProps('fullName')}
            {...getFieldMeta('fullName')}
            label='Your full name'
            type='text'
            containerClassName='py-2'
          />
          <Input
            {...getFieldProps('phoneNumber')}
            {...getFieldMeta('phoneNumber')}
            label='Your phone number'
            type='text'
            containerClassName='py-2'
          />
          <CheckBox
            {...getFieldProps('agreement')}
            {...getFieldMeta('agreement')}
            containerClassName='py-2'
          >
            I read and agree Terms and Conditions
          </CheckBox>
          <div className='py-2'>
            <Button type='submit' variant='contained' color='primary'>
              Create account
            </Button>
          </div>
        </form>
      </div>
    )
  }

  return renderCreateAccount()
}

export default CreateAccount
