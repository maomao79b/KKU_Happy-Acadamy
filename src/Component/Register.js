import React, { useState } from 'react';
import './../App.css';
import '../CSS/Register.css';

function Register() {
    const [errorMessages, setErrorMessages] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const database = [];
    const errors = {
        uname: "invalid username",
        upass: "invalid password"
    };
    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        var { uname, upass } = document.forms[0]

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

    const formForRegister = (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='fullName__container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='Register__container' style={{ flex: 1 }}>
                        <label>Firstname</label>
                        <input type="text" name='fname' required />
                        {renderErrorMessage("fname")}
                    </div>
                    <div className='Register__container' style={{ flex: 1 }}>
                        <label>Lastname</label>
                        <input type="text" name='lname' required />
                        {renderErrorMessage("lname")}
                    </div>
                </div>
                <div className='Register__container'>
                    <label>E-mail</label>
                    <input type="email" name='email' required />
                    {/* {renderErrorMessage("ename")} */}
                </div>
                <div className='Register__container'>
                    <label>Username</label>
                    <input type="text" name='uname' required />
                    {/* {renderErrorMessage("uname")} */}
                </div>
                <div className='Register__container'>
                    <label>Password</label>
                    <input type="password" name="upass" required />
                    {/* {renderErrorMessage("upass")} */}
                </div>
                <div className='Register__container'>
                    <label>Comfirm Password</label>
                    <input type="password" name="uconfpass" required />
                    {/* {renderErrorMessage("upass")} */}
                </div>
                <div className='Button__container'>
                    <input type="submit" onChange={handleSubmit}/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="App">
            <div className="Register__form">
                <div className="Register__title">Register</div>
                {isSubmitted ? <div>Register Success</div> : formForRegister}
            </div>
        </div>
    );
}

export default Register;
