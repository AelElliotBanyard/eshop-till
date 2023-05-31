"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { Picture } from "@/types";

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  const [categories, setCategories] = useState([] as string[]);

  const pb = new PocketBase("https://till.banyard.tech");

  const getPictures = async () => {
    setPictures(await pb.collection("pictures").getFullList());
    let tempCategories = [] as string[];
    pb.collection("pictures")
      .getFullList<Picture>()
      .then((pics) =>
        pics.forEach((picture: Picture) => {
          picture.category.split(",").map((category) => {
            if (!tempCategories.includes(category.trim())) {
              tempCategories.push(category.trim());
            }
          });
        })
      );
    setCategories(tempCategories);
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <div className="pictures">
      <div>
        {categories.map((category: string) => {
          return <p>{category}</p>;
        })}
      </div>
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
