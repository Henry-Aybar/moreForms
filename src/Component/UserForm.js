import React, { useState } from  'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("firstName is required!");
        } else if(e.target.value.length < 2) {
            setFirstNameError("firstName must be 2 characters or longer!");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("LastName is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("LastName must be 2 characters or longer!");
        }
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 2) {
            setEmailError("Email must be 2 characters or longer!");
        }
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        }
    }

    // const formMessage = () => {
    //     if( hasBeenSubmitted ) {
	//     return "Thank you for submitting the form!";
	// } else {
	//     return "Welcome, please submit the form";
	// }
    // };
    
    return (
        <form onSubmit={ createUser }>
            {/* <h3>{ firstNameError }</h3> */}
            {/* { hasBeenSubmitted ? 
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>  
            } */}
    
	        <div>
                <label>FirstName: </label> 
                <input type="text" onChange={ handleFirstName } />
                <span>{ firstNameError }</span>
            </div>
	        <div>
                <label>LastName: </label> 
                <input type="text" onChange={ handleLastName } />
                <span>{ lastNameError }</span>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                <span>{ emailError }</span>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                <span>{ passwordError }</span>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;