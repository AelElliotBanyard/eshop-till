'use client'
import React from 'react';
import Input from '../../components/Input'
import { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";

const forgotPWD = () => {
    const[email, setEmail] = useState("")
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <button className="backButton"><AiOutlineArrowLeft/></button> 
                <h1 className="resetTitle">Forgot password?</h1>
                <Input label="Enter your Email" type="mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button className="loginButton" type="submit">Reset</button>
            </div>
        </div>
    );
};

export default forgotPWD;