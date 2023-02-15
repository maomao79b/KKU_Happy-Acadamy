import React,{ useState } from 'react';
import './../App.css';
import '../CSS/Login.css';

function Login() {
  const [errorMessages, setErrorMessages] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];
    const errors = {
      uname: "invalid username",
      upass: "invalid password"
    };
  const handleSubmit = (event) => {
    // prevent page reload
    event.preventDefault();
    var { uname, upass} = document.forms[0]

    const userData = database.find((user) => user.username === uname.value);
  
    if (userData) {
      if (userData.password !== upass.value) {
        // Invalid password
        setErrorMessages({ name: "upass", message: errors.upass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const formForLogin = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='Login__container'>
          <label>Username</label>
          <input type="text" name='uname' required/>
          {renderErrorMessage("uname")}
        </div>
        <div className='Login__container'>
          <label>Password</label>
          <input type="password" name="upass" required/>
          {renderErrorMessage("upass")}
        </div>
        <div className='Button__container'>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="App">
        <div className="Login__form">
          <div className="Login__title">Login</div>
          {isSubmitted ? <div>Login Success</div> : formForLogin}
        </div>
    </div>
  );
}

export default Login;
