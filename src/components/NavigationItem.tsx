"use client";

import { NavigationItemProps } from "@/types";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const NavigationItem = ({
  title,
  path,
  list,
  subroutes,
}: NavigationItemProps) => {
  if (list) {
    const [open, setOpen] = useState(false);
    return (
      <div className={"navList " + (open ? "open" : "closed")} onClick={() => setOpen(!open)}>
  
        {" "}
        <div className="navListTitle">
          <p>{title}</p>
          <AiOutlineDown className="navListArrow"/>
        </div>
        <div className={"navListItem " + (open ? "open" : "closed")}>
          {subroutes?.map((subroute) => {
            return <Link href={subroute.path}>{subroute.title}</Link>;
          })}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default NavigationItem;
