'use client'
import React from 'react';
import { useState } from 'react';
import Input from '../../components/Input'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <h1 className="loginTitle">Login</h1>
                <div className="loginContainerInputs">
                    <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                    <Input label="Passwort" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                </div>
            </div>
        </div>
    );
};

export default Login;