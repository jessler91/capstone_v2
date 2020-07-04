import React from 'react'
import { TextField,Button,Container } from '@material-ui/core'

const Login = (props) => {

  // still need to declare username and pass 

  const _onSubmit = (e) => {
    e.preventdefault();
    console.log('booom')
    props.login()
  }

    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={_onSubmit}>
            <TextField
              required
              // onChange={props.handleTextChange}
              // value={user.username}
              placeholder='username'
              name="username"
              type="text" 
            />
            <TextField
              required
              // onChange={props.handleTextChange}
              // value={user.password}
              placeholder='password'
              name="password"
              type="password" 
            />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >Login</Button>
          </form>
        </Container>
      </div>
    );

}

export default Login;