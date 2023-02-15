import React, { useState } from 'react';
import './../App.css';
import '../CSS/Register.css';

function Register() {
    const [errorMessages, setErrorMessages] = useState({})
    // const [isSubmitted, setIsSubmitted] = useState(false)
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const errors = {
        uname: "Username already exists",
        upass: "Passwords do not match"
    };
    const handleSubmit = (event) => {
        // prevent page reload
        event.preventDefault();
        var { fname, lname, email, upass, uconfpass } = document.forms[0] // ดึงข้อมูลจาก input form ตาม name

        // นำ email จาก register ไปตรวจสอบใน database
        // นำ username จาก register ไปตรวจสอบใน database
        // ตั้ง password 8 ตัว(ถ้าอยากจะทำ)
        // ตรวจ password และ confirm password ให้ตรงกัน



        // const userData = database.find((user) => user.username === uname.value);
        // if (true) { // 
        //     if (userData.password !== upass.value) {
        //         // Invalid password
        //         setErrorMessages({ name: "upass", message: errors.upass });
        //     } else {
        //         setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: "uname", message: errors.uname });
        // }
    };

    const formForRegister = (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='fullName__container' style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='Register__container' style={{ flex: 1 }}>
                        <label>Firstname</label>
                        <input type="text" name='fname' required />
                        {/* {renderErrorMessage("fname")} */}
                    </div>
                    <div className='Register__container' style={{ flex: 1 }}>
                        <label>Lastname</label>
                        <input type="text" name='lname' required />
                        {/* {renderErrorMessage("lname")} */}
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
                    {renderErrorMessage("uconfpass")}
                </div>
                <div className='Button__container'>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    );

    return (
        <div className="App">
            <div className="Register__form">
                <div className="Register__title">Register</div>
                    {formForRegister}
                {/* {isSubmitted ? <div>Register Success</div> : formForRegister} */}
            </div>
        </div>
    );
}

export default Register;
