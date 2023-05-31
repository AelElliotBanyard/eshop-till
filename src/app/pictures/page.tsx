"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  useEffect(() => {
    fetch("https://till.banyard.tech/api/collections/pictures/records")
      .then((response) => response.json())
      .then((data) => setPictures(data.items));
  }, []);
  return (
    <div className="pictures">
      {pictures.map((picture: any) => {
        return (
          <Link href={`/pictures/${picture.id}`}>
            <img src={picture.src} alt={picture.alt} />
          </Link>
        );
      })}
    </div>
  );
};

export default Pictures;
