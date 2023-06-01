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
    passwordConfirm: false,
  });

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

    setErrors({
      firstname: false,
      name: false,
      email: false,
      address: false,
      plz: false,
      place: false,
      phone: false,
      password: false,
      passwordConfirm: false,
    });

    if (firstname.length == 0) {
      let temp = errors;
      temp.firstname = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.firstname = false;
      setErrors(temp);
    }
    if (name.length == 0) {
      let temp = errors;
      temp.name = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.name = false;
      setErrors(temp);
    }
    if (email.length == 0) {
      let temp = errors;
      temp.email = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.email = false;
      setErrors(temp);
    }
    if (address.length == 0) {
      let temp = errors;
      temp.address = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.address = false;
      setErrors(temp);
    }
    if (plz.length == 0) {
      let temp = errors;
      temp.plz = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.plz = false;
      setErrors(temp);
    }
    if (place.length == 0) {
      let temp = errors;
      temp.place = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.place = false;
      setErrors(temp);
    }
    if (phone.length == 0) {
      let temp = errors;
      temp.phone = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.phone = false;
      setErrors(temp);
    }
    if (password.length == 0) {
      let temp = errors;
      temp.password = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.password = false;
      setErrors(temp);
    }
    if (passwordConfirm.length == 0) {
      let temp = errors;
      temp.passwordConfirm = true;
      setErrors(temp);
    } else {
      let temp = errors;
      temp.passwordConfirm = false;
      setErrors(temp);
    }

    setErrors(errors)

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
            errorMessage={
              email === ""
                ? "Fill out this field"
                : email.match(
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
