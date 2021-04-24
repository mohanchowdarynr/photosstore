import React from 'react'

const Login = ({
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignUp,
    hasAccount,
    setHasAccount ,
    emailError,
    passwordError        
                }) => {
    return (
        <section className="login">
          <div className="loginContainer">
              <div className="loginContainer_Info">
                <p>GuestAccount <br />
                  chiru@gmail.com<br/>
                  chiru1234
                </p>
                </div>
            <label>Email</label>
            <input 
                type="text"
                outfocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>
            <label>password</label>
            <input 
                type="password"
                outfocus
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <div className="btnContainer">
             {hasAccount ?
             (<> 
              <button onClick={handleLogin}>Sign In</button>
              <p>Dont have an account?<span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
              </>)
             :(
               <>
              <button  onClick={handleSignUp}>Sign Up</button>
              <p>Already have an acc?<span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
              </>
              )
              }
            </div>
          </div>
        </section >
    )
}

export default Login
