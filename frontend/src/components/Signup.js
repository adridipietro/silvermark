import React, {useState, useDispatch} from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { SIGNUP_USER } from '../actions/types'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
      // prevent default
      // clear the form
      // assign the state to var
      // fetch call to api
      // method, headers, body
      e.preventDefault()
      const data = {
        name: name,
        email: email,
        password: password
      }
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
      .then(json => dispatch({type: SIGNUP_USER, payload: json}))
  }


/* redirect = () => {
    this.props.history.push("/")
}
 */

        return (
            <div className="signup-form">
              <h1>Signup</h1>
              <form onSubmit={handleSubmit}>
                <div>
                  <TextField type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name}/>
                </div>
                <div>
                  <TextField type="text" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                  <TextField type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div><br></br>
                <Button type="submit">Signup</Button>
              </form>
            </div>
        )
  

}
export default Signup