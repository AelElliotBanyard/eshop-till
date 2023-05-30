import NavigationItem from "./NavigationItem";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul className="navigationItems">
                    <li><NavigationItem title="Home" path="/" list={false} /></li>
                    <li><NavigationItem title="Pictures" path="/pictures" list={false} /></li>
                    <li><NavigationItem title="About" path="/" list={true} subroutes={[{title: "About Me", path: "/"}, {title: "Portfolio", path: "https://tillgrezet.myportfolio.com/"}]} /></li>
                    <li><NavigationItem title={<AiOutlineShoppingCart className="cartIcon" size={20} />} path="/cart" list={false} /></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;