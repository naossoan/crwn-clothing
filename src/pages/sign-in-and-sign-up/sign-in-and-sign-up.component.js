import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/signin/signin.component'

 const SignInAndSignUpPage = () => {
  return (
    <div>
      <SignIn />
      <div className='sign-in-and-sign-up'>SIGN UP</div>
    </div>
  )
}

export default SignInAndSignUpPage