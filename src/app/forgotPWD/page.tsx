'use client'
import React from 'react';
import Input from '../../components/Input'
import { useState } from 'react'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from 'next/navigation'

const forgotPWD = () => {
    const[email, setEmail] = useState("")
    const router = useRouter()
    return (
        <div className="loginPage">
            <div className="loginContainer">
                <button className="backButton" onClick={() => router.back()}><AiOutlineArrowLeft/></button> 
                <h1 className="resetTitle">Forgot password?</h1>
                <Input label="Enter your Email" type="mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button className="loginButton" type="submit">Reset</button>
            </div>
        </div>
    );
};

export default forgotPWD;