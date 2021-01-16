import React from 'react'
import './signup.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async e => {
    //this prevents the default functionality of the 'submit' button type.
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    } 

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      
      createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    
    this.setState({ [name]: value })
  }


  render () {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I need an account</h2>
        <span>Register with your details below</span>
        
        <form className='signup-form' onSubmit={this.handleSubmit}>
        <FormInput
            name='displayName'
            type='text'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
                
          <FormInput
            name='email'
            type='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />          

          <CustomButton type='submit'>Register</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp