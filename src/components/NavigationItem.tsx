'use client';

import { NavigationItemProps } from "@/types";
import Link from "next/link";
import { useState } from "react";

const NavigationItem = ({
  title,
  path,
  list,
  subroutes,
}: NavigationItemProps) => {
  if (list) {
    const [open, setOpen] = useState(false);
    return <div></div>;
  }
  return (
    <div>
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default NavigationItem;
