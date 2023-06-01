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
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const router = useRouter();

  const [errors, setErrors] = useState({
    firstname: false,
    name: false,
    email: false,
    address: false,
    plz: false,
    place: false,
    phone: false,
    password: false,
    passwordConfirm: false
  })

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
      passwordConfirm: passwordConfirm,
      role: "user",
    };

    if (firstname === "") {
        setErrors({...errors, firstname: true})
    }else if (name === "") {
        setErrors({...errors, name: true})
    }else if (email === "") {
        setErrors({...errors, email: true})
    }else if (address === "") {
        setErrors({...errors, address: true})
    }else if (plz === "") {
        setErrors({...errors, plz: true})
    }else if (place === "") {
        setErrors({...errors, place: true})
    }else if (phone === "") {
        setErrors({...errors, phone: true})
    }else if (password === "") {
        setErrors({...errors, password: true})
    }else if (passwordConfirm === "") {
        setErrors({...errors, passwordConfirm: true})
    }

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
            error={errors.firstname}
            errorMessage="Fill out this field"
          />
          <Input
            label="Lastname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}   
            error={errors.name}
            errorMessage="Fill out this field"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
            errorMessage="Fill out this field"
          />
          <Input
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={errors.address}
            errorMessage="Fill out this field"
          />
          <div className="plz">
            <Input
              label="PLZ"
              type="text"
              value={plz}
              onChange={(e) => setPlz(e.target.value)}
              error={errors.plz}
              errorMessage="Fill out this field"
            />
          </div>
          <Input
            label="Place"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            error={errors.place}
            errorMessage="Fill out this field"
          />
          <Input
            label="Phonenumber"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
            errorMessage="Fill out this field"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
            errorMessage="Fill out this field"
          />
          <Input
            label="Confirm password"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={errors.passwordConfirm}
            errorMessage="Fill out this field"
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
