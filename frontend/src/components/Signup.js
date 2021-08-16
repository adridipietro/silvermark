import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { signupUser } from '../actions/types'

class Signup extends React.Component {
    state = {
      name: '',
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
      e.preventDefault()
        this.props.signupUser(this.state.name, this.state.email, this.state.password)
        this.setState({
          name: '',
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
        let { name, email, password } = this.state
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
export default Signup