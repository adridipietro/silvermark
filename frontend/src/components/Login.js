/* import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { loginUser } from '../actions/index'
import { connect } from 'react-redux'

class Login extends React.Component {
    state = {
      email: '',
      password: ''
    }


     handleSubmit = (e) =>{
        e.preventDefault()
        let credentials  = this.state
        this.props.loginUser(credentials)
        this.props.history.push('/bookmarks')
        
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

const mapStateToProps = (state) => {
  const { loggedIn } = state.users
  return {
    loggedIn
  }
}



const mapDispatch = (dispatch) => {
  return {
    loginUser: (credentials) => dispatch(loginUser(credentials))
    
  }
}


export default connect(mapStateToProps, mapDispatch)(Login) */