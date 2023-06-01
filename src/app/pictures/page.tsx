"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import { Picture } from "@/types";
import { AiOutlineClose } from "react-icons/ai";
import CustomSelect from "@/components/CustomSelect";

const Pictures = () => {
  const [pictures, setPictures] = useState([] as Picture[]);
  const [categories, setCategories] = useState([] as string[]);
  const [activeCategories, setActiveCategories] = useState([] as string[]);

  const pb = new PocketBase("https://till.banyard.tech");

  const getPictures = async () => {
    let temp = await pb.collection("pictures").getFullList({
      expand: "category",
    });
    let pics = temp.map((picture: any) => {
      return {
        id: picture.id,
        src: picture.src,
        alt: picture.alt,
        price: picture.price,
        description: picture.description,
        category: picture.expand.category.map((category: any) => category.name),
      };
    });
    setPictures(pics as Picture[]);
  };
  const getCategories = async () => {
    setCategories(
      await (
        await pb.collection("categories").getFullList()
      ).map((category: any) => category.name)
    );
  };

  useEffect(() => {
    getPictures();
    getCategories();
  }, []);

  return (
    <div className="pictures">
      <div className="filters">
        <CustomSelect
          label="Filter"
          onChange={(e) => {
            let category = e;
            if (activeCategories.includes(category)) {
              let tempCategories = activeCategories.filter(
                (activeCategory) => activeCategory !== category
              );
              setActiveCategories(tempCategories);
            } else if (
              !activeCategories.includes(category) &&
              category !== ""
            ) {
              setActiveCategories([...activeCategories, category]);
            }
          }}
          options={categories.map((category: string) => {
            return {
              label:
                category.charAt(0).toUpperCase() +
                category.substring(1, category.length),
              value: category,
            };
          })}
        />
        {activeCategories.map((category: string) => {
          return (
            <div
              className={
                "filter " +
                (activeCategories.includes(category) ? "active" : "")
              }
              key={category}
              onClick={() => {
                if (activeCategories.includes(category)) {
                  let tempCategories = activeCategories.filter(
                    (activeCategory) => activeCategory !== category
                  );
                  setActiveCategories(tempCategories);
                } else {
                  setActiveCategories([...activeCategories, category]);
                }
              }}
            >
              <p>
                {category.charAt(0).toUpperCase() +
                  category.substring(1, category.length)}
              </p>
              <AiOutlineClose className="icon" />
            </div>
          );
        })}
      </div>
      {pictures.map((picture: Picture) => {
        return (
          <Link
            href={`/pictures/${picture.id}`}
            className={
              "image " +
              (activeCategories.length === 0 ||
              activeCategories.some((activeCategory) =>
                picture.category.includes(activeCategory)
              )
                ? "show"
                : "hidden")
            }
          >
            <img src={picture.src} alt={picture.alt} />
          </Link>
        );
      })}
    </div>
  );
};

export default Pictures;
