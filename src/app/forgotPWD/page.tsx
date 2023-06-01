'use client'
import React from 'react';
import Input from '../../components/Input'
import { useState } from 'react'

const forgotPWD = () => {
    const[email, setEmail] = useState("")
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <h1 className="resetTitle">Forgot password?</h1>
                <Input label="Enter your Email" type="mail" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                <button className="loginButton" type="submit">Reset</button>
            </div>
        </div>
    );
};

export default forgotPWD;