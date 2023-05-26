import NavigationItem from "./NavigationItem";

const Navigation = () => {
    return (
        <div className="navigation">
            <nav>
                <ul>
                    <li><NavigationItem title="Home" path="/" list={false} /></li>
                    <li>Pictures</li>
                    <li>Portfolio</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;