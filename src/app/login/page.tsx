"use client";
import React from "react";
import { useState } from "react";
import Input from "../../components/Input";
import Link from "next/link";
import PocketBase from "pocketbase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    account: false,
  })

  const login = async () => {
    const pb = new PocketBase("https://till.banyard.tech");
    if (email === "") {
        setErrors({...errors, email: true})
    }else if (password === "") {
        setErrors({...errors, password: true})
    }else {
        const records = await pb.collection('users').getFullList({
            filter: `email = "${email}"`, 
        });
        if (records.totalItems != 0) {
            try {
                const authData = await pb.collection('users').authWithPassword(
                    email,
                    password
                );
            }catch(error) {
                console.log(error)
                setEmail("")
                setPassword("")
            }
        }else {
            setErrors({...errors, account: true })
        }
    }
  }
        
  return (
    <div className="loginPage">
      <div className="loginContainer">
        <h1 className="loginTitle">Login</h1>
        <div className="loginContainerInputs">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            errorMessage="Fill out this field"
          />
          <Input
            label="Passwort"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            errorMessage="Fill out this field"
          />
        </div>
        <button className="loginButton" type="submit" onClick={login}>
          Log in
        </button>
        <div className="linkContainer">
          <div className="fullLink">
            <p>No account yet?</p>
            <Link className="link" href="/register">
              Register
            </Link>
          </div>
          <div className="fullLink">
            <p>Forget your password?</p>
            <Link className="link" href="/forgotPWD">
              Reset
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
