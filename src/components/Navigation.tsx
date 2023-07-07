"use client";
import NavigationItem from "./NavigationItem";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const current = usePathname().split("/")[1];
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
          <li
            className={
              "navigationItem " + (current === "about" ? "active" : "")
            }
          >
            <NavigationItem
              title="About"
              path="/"
              list={true}
              subroutes={[
                { title: "About Me", path: "/about" },
                {
                  title: "Portfolio",
                  path: "https://tillgrezet.myportfolio.com/",
                },
              ]}
            />
          </li>
          <li className="navigationItemGroup">
            <ul className="container">
              <li
                className={
                  "navigationItem " + (current === "cart" ? "active" : "")
                }
              >
                <NavigationItem
                  title={
                    <AiOutlineShoppingCart className="cartIcon" size={20} />
                  }
                  path="/cart"
                  list={false}
                />
              </li>
              <li
                className={
                  "navigationItem " + (current === "login" ? "active" : "")
                }
              >
                <NavigationItem
                  title={<AiOutlineUser className="userIcon" size={20} />}
                  path="/login"
                  list={false}
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
