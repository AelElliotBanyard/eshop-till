import NavigationItem from "./NavigationItem";
import { AiOutlineShoppingCart, AiOutlineDown } from "react-icons/ai";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavigationItem title="Home" path="/" list={false} /></li>
                    <li>Pictures</li>
                    <li><NavigationItem title="Portfolio" path="https://tillgrezet.myportfolio.com/" list={false} /></li>
                    <li><NavigationItem title={<AiOutlineShoppingCart />} path="/cart" list={false} /></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;