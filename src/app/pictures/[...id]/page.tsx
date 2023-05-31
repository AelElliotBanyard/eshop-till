"use client";
import PictureComponent from "@/components/PictureComponent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const router = usePathname();
  const [picture, setPicture] = useState({
    id: "",
    collectionId: "",
    collectionName: "",
    created: "",
    updated: "",
    src: "",
    alt: "",
    price: 0,
    description: "",
    categroy: "",
  });
  useEffect(() => {
    fetch(
      "https://till.banyard.tech/api/collections/pictures/records/" +
        router.split("/")[2]
    )
      .then((response) => response.json())
      .then((data) => setPicture(data));
  }, []);
  return (
    <div className="product">
      <PictureComponent {...picture} />
    </div>
  );
};

export default page;
