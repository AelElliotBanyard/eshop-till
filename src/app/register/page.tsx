"use client";
import React, { useState } from "react";
import Input from "../../components/Input";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [plz, setPlz] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const router = useRouter();

  const register = async () => {
    const pb = new PocketBase("https://till.banyard.tech");
    const data = {
      firstname: firstname,
      name: name,
      email: email,
      address: address,
      plz: plz,
      place: place,
      phone: phone,
      password: password,
      passwordConfirm: confPassword,
      role: "user",
    };
    try {
      const record = await pb.collection("users").create(data);
      router.replace("/register/success");
    } catch (error) {
      console.log(error);
      router.replace("/register/error");
    }
  };
  return (
    <div className="loginPage">
      <div className="loginContainerRegistration">
        <button className="backButton" onClick={() => router.back()}>
          <AiOutlineArrowLeft />
        </button>
        <h1 className="loginTitleRegistration">Registration</h1>
        <div className="loginContainerInputs">
          <Input
            label="Firstname"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            label="Lastname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div className="plz">
            <Input
              label="PLZ"
              type="text"
              value={plz}
              onChange={(e) => setPlz(e.target.value)}
            />
          </div>
          <Input
            label="Place"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <Input
            label="Phonenumber"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirm password"
            type="password"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <button className="loginButton" type="submit" onClick={register}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
