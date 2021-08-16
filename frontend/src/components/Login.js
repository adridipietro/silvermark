import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { loginUser } from '../actions/index'


class Login extends React.Component {
    state ={
      email: '',
      password: ''
    }

    

     handleSubmit = (e) =>{
        // prevent default
        // clear the form
        // assign the state to var
        // fetch call to api
        // method, headers, body
        e.preventDefault()
        this.props.loginUser(this.state.email, this.state.password)
        this.setState({
          email: '',
          password: ''
        })
    }

    
    handleChange = (e) => {
      //debugger
      this.setState({[e.target.name]: e.target.value})
      // html name attribute as a key
      // uses the key to tell what part of state we are going to update
    }
    
   render() {
     const {email, password} = this.state
     return (
         <div className="login-form">
           <h1>Login</h1>
           <form onSubmit={this.handleSubmit}>
             <div>
               <TextField type="text" name="email" placeholder="Email" onChange={this.handleChange} value={email} />
             </div>
             <div>
               <TextField type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password}/>
             </div><br></br>
             <Button type="submit" value="Login">Login</Button>
           </form>
         </div>
     )
   }

} 

export default Login