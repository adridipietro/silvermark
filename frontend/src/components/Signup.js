import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { signupUser } from '../actions/index'
import { connect } from 'react-redux'
import history from '../history';

class Signup extends React.Component {
    state = {
      name: '',
      email: '',
      password: ''
    }


      handleSubmit = (e) =>{
          e.preventDefault()
          const { name, email, password } = this.state
          debugger
          this.props.signupUser({ name, email, password })
          this.props.history.push('/')
          
      }


      handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

      render () {
        const { name, email, password } = this.state
        return (
            <div className="signup-form">
              <h1>Signup</h1>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <TextField type="text" name="name" placeholder="Name" onChange={this.handleChange} value={name}/>
                </div>
                <div>
                  <TextField type="text" name="email" placeholder="Email" onChange={this.handleChange} value={email}/>
                </div>
                <div>
                  <TextField type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} />
                </div><br></br>
                <Button type="submit">Signup</Button>
              </form>
            </div>
        )

      }

}

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (data) => dispatch(signupUser(data))
  };
}

export default connect(null, mapDispatchToProps)(Signup)