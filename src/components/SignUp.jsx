import { useState } from 'react'
import axios from 'axios'

import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import line from '../assets/images/line.svg'
import ErrorMsg from './Error'

const SignUp = () => {

  const [campos, setCampos] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })

  const [errors,setErrors] = useState({
    all:'',
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  

  const handleChangle = (e) => {
    switch (e.target.name) {
      case 'username':
        setErrors({...errors,all:'', username: ''})
        break;
      case 'email':
        setErrors({...errors,all:'', email: ''})
        break;
      case 'password':
        setErrors({...errors,all:'', password: ''})
        break;
      case 'confirm_password':
        setErrors({...errors,all:'', confirm_password: ''})
        break;
      default:
        break;  
    }

    setCampos({
      ...campos,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {username, email, password, confirm_password} = campos

    if(username === '' && email === '' && password === '' && confirm_password === '') {
      setErrors({...errors,all: 'Todos los campos son obligatorios'})
      return;
    }else if ( username === '' ) {
      setErrors({...errors,username: 'El campo username es obligatorio'})
      return;
    }else if ( email === '' ) {
      setErrors({...errors,email: 'El campo email es obligatorio'})
      return;
    }else if ( password === '' ) {
      setErrors({...errors,password: 'El campo password es obligatorio'})
      return;
    }else if ( confirm_password === '' ) {
      setErrors({...errors,confirm_password: 'El campo confirm_password es obligatorio'})
      return;
    }else if ( password !== confirm_password ) {
      setErrors({...errors,all: 'Las contraseñas no coinciden'})
      return;
    }
    
    try {
      const data = await axios.post('http://localhost:8000/api/v1/users/register',campos)
      console.log(data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
      <main className='singup'>
        <div className="title">
          <h1>Get Started With MAKER</h1>
          <p className="title__paragraph">Getting started is easy</p>
        </div>
        <div className="button-social">
          <button className="google">
            <img src={google} alt="logo google" />
            Google
          </button>
          <button className="facebook">
            <img src={facebook} alt="logo facebook" />
            Facebook
          </button>
        </div>
        <div className="separator">
          <img src={line} alt="" />
          <p>Or continue with</p>
          <img src={line} alt="" />
        </div>
        {errors.all && <p className="error_all">{ errors.all }</p>}
        <form className='form' onSubmit={handleSubmit}>
          <div className="form__inputs">
            <input name="username" type="text" placeholder='Full name' onChange={handleChangle} />
            {errors.username && <ErrorMsg error={errors.username} />}
            <input name="email" type="email" placeholder='Email' onChange={handleChangle} />
            {errors.email && <ErrorMsg error={errors.email} />}
            <input name="password" type="password" placeholder='Password' onChange={handleChangle}  />
            {errors.password && <ErrorMsg error={errors.password} />}
            <input name="confirm_password" type="password" placeholder='Confirm Password' onChange={handleChangle}  />
            {errors.confirm_password && <ErrorMsg error={errors.confirm_password} />}
          </div>
          <input type="submit" value="Create Account" />
        </form>
        <p className='comment'>By continuing you indicate that you read and agreed to the Terms of Use</p>
      </main>
    </>
  )
}

export default SignUp