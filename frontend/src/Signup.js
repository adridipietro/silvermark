import React from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    }
}

handleSubmit = (e) =>{
    // prevent default
    // clear the form
    // assign the state to var
    // fetch call to api
    // method, headers, body
    e.preventDefault()

    const data = { ...this.state }
    const dataObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/users', dataObject)
    .then(response => response.json())
    .then(json => {debugger})
}


redirect = () => {
    this.props.history.push("/")
}



handleChange = (e) => {
  const { name, value } = e.target
  this.setState({
      [name]: value,
  })
}



  render(){

    const { email, password, name } = this.state
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