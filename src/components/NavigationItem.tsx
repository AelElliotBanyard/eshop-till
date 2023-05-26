import { NavigationItemProps } from "@/types";
import Link from "next/link";

const NavigationItem = ({
  title,
  path,
  list,
  subroutes,
}: NavigationItemProps) => {
  if (list) {
    return <div></div>;
  }
  return (
    <div>
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default NavigationItem;
