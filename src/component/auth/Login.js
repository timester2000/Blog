import React, { useState} from 'react'

function Login() {

  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  function handleEmailChange(e){
    setemail(e.target.value)
  }

  function handlePasswordChange(e){
    setpassword(e.target.value)
  }

  function onSubmit (e) {
    e.preventDefault();

    const options = {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    }

    fetch('http://127.0.0.1:8000/api/accounts/login')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
  }
  return (
<div className="row" style={{margin:'20px'}}>
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Login
                </span>
              </h1>
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
  )
  }

export default Login