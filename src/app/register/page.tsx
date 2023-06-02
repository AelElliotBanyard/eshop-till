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

  const [firstnameError, setFirstnameError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [plzError, setPlzError] = useState(false);
  const [placeError, setPlaceError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);

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

    setFirstnameError(false);
    setNameError(false);
    setEmailError(false);
    setAddressError(false);
    setPlzError(false);
    setPlaceError(false);
    setPhoneError(false);
    setPasswordError(false);
    setPasswordConfirmError(false);

    if (firstname.length == 0) {
      setFirstnameError(true);
    } else {
      setFirstnameError(false);
    }
    if (name.length == 0) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (
      email.length == 0 ||
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (address.length == 0) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
    if (plz.length == 0) {
      setPlzError(true);
    } else {
      setPlzError(false);
    }
    if (place.length == 0) {
      setPlaceError(true);
    } else {
      setPlaceError(false);
    }
    if (phone.length == 0) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    if (password.length == 0) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    if (passwordConfirm.length == 0) {
      setPasswordConfirmError(true);
    } else {
      setPasswordConfirmError(false);
    }

    if (
      firstname != "" &&
      name != "" &&
      email != "" &&
      address != "" &&
      plz != "" &&
      place != "" &&
      phone != "" &&
      password != "" &&
      passwordConfirm != ""
    ) {
      try {
        const record = await pb.collection("users").create(data);
        router.replace("/register/success");
      } catch (error) {
        console.log(error);
        router.replace("/register/error");
      }
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
            error={firstnameError}
            errorMessage="Fill out this field"
          />
          <Input
            label="Lastname"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={nameError}
            errorMessage="Fill out this field"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            errorMessage={
              email === ""
                ? "Fill out this field"
                : !email.match(
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  )
                ? "Please enter valid email"
                : ""
            }
          />
          <Input
            label="Address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={addressError}
            errorMessage="Fill out this field"
          />
          <div className="plz">
            <Input
              label="PLZ"
              type="text"
              value={plz}
              onChange={(e) => setPlz(e.target.value)}
              error={plzError}
              errorMessage="Fill out this field"
            />
          </div>
          <Input
            label="Place"
            type="text"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
            error={placeError}
            errorMessage="Fill out this field"
          />
          <Input
            label="Phonenumber"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={phoneError}
            errorMessage="Fill out this field"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
            errorMessage="Fill out this field"
          />
          <Input
            label="Confirm password"
            type="password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            error={passwordConfirmError}
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
