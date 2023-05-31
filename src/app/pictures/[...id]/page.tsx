"use client";
import PictureComponent from "@/components/PictureComponent";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const router = usePathname();
  const images = [
    {
      src: "https://picsum.photos/300/200",
      alt: "random image 1",
      price: 100,
      description: "random description 1",
      id: 1,
    },
    {
      src: "https://picsum.photos/600/400",
      alt: "random image 2",
      price: 1010,
      description: "random description 2",
      id: 2,
    },
  ];
  return (
    <div className="product">
      <PictureComponent
        {...images.find(
          (a) => (a.id === parseFloat(router.split("/")[2] as string))
        )}
      />
    </div>
  );
};

export default page;
