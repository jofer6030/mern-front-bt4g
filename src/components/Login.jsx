import { useState } from 'react'
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import line from '../assets/images/line.svg'
import ErrorMsg from './Error'
import axios from 'axios'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginSucces,setLoginSucces] = useState('')
  const [errors,setErrors] = useState({
    all:'',
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setErrors({...errors,all:'', email: ''})
        setEmail(e.target.value)
        break;
      case 'password':
        setErrors({...errors,all:'', password: ''})
        setPassword(e.target.value)
        break;
      default:
        break;  
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email === '' && password === '') {
      setErrors({...errors,all: 'Todos los campos son obligatorios'})
      return;
    }else if ( email === '') {
      setErrors({...errors,email: 'El campo email es obligatorio'})
      return;
    }else if ( password === '') {
      setErrors({...errors,password: 'El campo password es obligatorio'})
      return;
    }

    try {
      const {data} = await axios.post('http://localhost:8000/api/v1/users/login',{
        email,
        password
      })
      setLoginSucces(data.msg)
    } catch (error) {
      setErrors({...errors, all: error.response.data.msg})
    }
  }


  return (
    <>
      <main className='login'>
        <div className="title">
          <h1>Welcome Back</h1>
          <p className="title__paragraph">Login into your account</p>
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
        {loginSucces && <p className="success">{loginSucces}</p>}
        <form className='form' onSubmit={handleSubmit}>
          <div className="form__inputs">
            <input 
              name="email" 
              type="email"
              placeholder='Email' 
              // onChange={(e) => setEmail(e.target.value)}
              onChange={handleChange}
            />
            {errors.email && <ErrorMsg error={errors.email} />}
            <input 
              name="password" 
              type="password" 
              placeholder='Password' 
              // onChange={(e) => setPassword(e.target.value)}
              onChange={handleChange}
            />
            {errors.password && <ErrorMsg error={errors.password} />}
          </div>
          <div className="form__options">
            <div className="option__check">
              <input type="checkbox"/>
              <p>Remember me</p>
            </div>
            <div className="option__text">
              <p>Recover Password</p>
            </div>
          </div>
          <input type="submit" value="Log in"/>
        </form>
      </main>
    </>
  )
}

export default Login