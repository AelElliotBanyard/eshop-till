import NavigationItem from "./NavigationItem";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavigationItem title="Home" path="/" list={false} /></li>
                    <li><NavigationItem title="Pictures" path="/pictures" list={false} /></li>
                    <li><NavigationItem title="About" path="/" list={true} subroutes={[{title: "About Me", path: "/aboutme"}, {title: "Portfolio", path: "https://tillgrezet.myportfolio.com/"}]} /></li>
                    <li><NavigationItem title={<AiOutlineShoppingCart />} path="/cart" list={false} /></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;