import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
// import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

import App from './App';

function LoginApp() {

    let isLoggedIn = "";

    const adminUser = {
        id: "123456789",
        password: "Admin12345!",
        type: "manager"
    }

    const basicUser = {
        id: "12345",
        password: "basic12345",
        type: "basic"
    }

    const [user, setUser] = useState({ name: "", id: "", type: "" });
    const [error, SetError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.id === adminUser.id && details.password === adminUser.password) {
            setUser({
                name: details.name,
                id: details.id,
                type: adminUser.type,
            });
            // this.props.history.push('/');
            isLoggedIn = true;
            console.log('Admin Logged in!  isLoggedIn:', isLoggedIn);
        }
        if (details.id === basicUser.id && details.password === basicUser.password) {
            setUser({
                name: details.name,
                id: details.id,
                type: basicUser.type,
            });
            isLoggedIn = true;
            console.log('basic user Logged in!  isLoggedIn:', isLoggedIn);
        }
        else {
            isLoggedIn = false;
            console.log('Details do not match!');
            SetError('Details do not match! Please Register :) ');
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", id: "", type: "" });
        // this.props.history.push('/');
        isLoggedIn = false;
    }


    return (
        <div className="App">
            {(user.id !== "") ? (
                <div className="welcome">
                    <App />
                    <br />
                    <button className="logout-button" onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
            {/* {(isLoggedIn==false)?(
               <Button className="right-navbar">
                <NavLink to='/Register'>Register</NavLink>
            </Button> 
            ):(
            <h4></h4>
            )} */}
        </div>
    );
}

export default withRouter(LoginApp);