"use client";
import router from "next/router";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineFrown } from "react-icons/ai";

const Error = () => {
  return (
    <div className="responsePage">
      <div className="responseContainer">
        <AiOutlineFrown size={50} />
        <h1 className="errorTitle">Something went wrong! <br /> Please try again later</h1>
      </div>
    </div>
  );
};

export default Error;
