"use client";
import NavigationItem from "./NavigationItem";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const current = usePathname().split("/")[1];
  console.log(current);
  return (
    <div className="navigation">
      <nav>
        <ul className="navigationItems">
          <li className={"navigationItem " + (current === "" ? "active" : "")}>
            <NavigationItem title="Home" path="/" list={false} />
          </li>
          <li
            className={
              "navigationItem " + (current === "pictures" ? "active" : "")
            }
          >
            <NavigationItem title="Pictures" path="/pictures" list={false} />
          </li>
          <li className={"navigationItem " + (current === "aboutMe" ? "active" : "")}>
            <NavigationItem
              title="About"
              path="/"
              list={true}
              subroutes={[
                { title: "About Me", path: "/aboutMe" },
                {
                  title: "Portfolio",
                  path: "https://tillgrezet.myportfolio.com/",
                },
              ]}
            />
          </li>
          <li className={"navigationItem " + (current === "cart" ? "active" : "")}>
            <NavigationItem
              title={<AiOutlineShoppingCart className="cartIcon" size={20} />}
              path="/cart"
              list={false}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
