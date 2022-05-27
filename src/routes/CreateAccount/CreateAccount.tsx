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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    navigate('/home')
  }

  const renderCreateAccount = () => {
    return (
      <div className='md-cra__container'>
        <div className='md-cra__app-content'>
          <img src='images/my-dash-llc.png' alt='create-account' />
          <div className='md-cra__app-content--info'>
            <h2>Choose a date range</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, asperiores</p>
          </div>
        </div>
        <form noValidate onSubmit={handleSubmit} className='md-cra__form'>
          <h1>Create Account</h1>
          <Input name='email' label='Your email address' type='text' containerClassName='py-2' />
          <Input name='password' label='Your password' type='text' containerClassName='py-2' />
          <Input
            name='confirmPassword'
            label='Confirm your password'
            type='text'
            containerClassName='py-2'
          />
          <Input name='fullName' label='Your full name' type='text' containerClassName='py-2' />
          <Input
            name='phoneNumber'
            label='Your phone number'
            type='text'
            containerClassName='py-2'
          />
          <CheckBox containerClassName='py-2' name='agreement'>
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
