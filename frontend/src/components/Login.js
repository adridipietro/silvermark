import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { loginUser } from '../actions/index'
import { connect } from 'react-redux'
import history from '../history'



class Login extends React.Component {
    state = {
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
        const { email, password } = this.state
        this.props.loginUser({ email, password })
        this.props.history.push('/')
        
    }

    
    handleChange = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }
    
   render() {
     const { email, password } = this.state
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

const mapState = (currentState) => {
  return {
    user: currentState.users.user
  }
}

const mapDispatch = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginUser(data))
    
  }
}


export default connect(mapState, mapDispatch)(Login)