"use client";
import router from "next/router";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineSmile } from "react-icons/ai";

const Success = () => {
  return (
    <div className="responsePage">
      <div className="responseContainer">
        <AiOutlineSmile size={50} />
        <h1 className="successTitle">You are registered!</h1>
        <button
          className="loginButton"
          type="submit"
          onClick={() => router.replace("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Success;
