import Link from "next/link";

const NavigationItem = ({ title, path, list, subroutes }: any) => {
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
