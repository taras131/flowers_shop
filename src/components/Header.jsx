import flowers from "../icons/flowers.png";
import cart from "../icons/cart.png";
import user from "../icons/user.png";

export const Header = ({setIsShowCart}) => {
    const onCartClick = () => {
        setIsShowCart(true)
    }
    return(
        <header className="d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex align-center">
                <img width={40} height={40} src={flowers} alt="flowers"/>
                <div className="headerInfo">
                    <h3>Магазин цетов</h3>
                    <p>лучшие цветы мира</p>
                </div>
            </div>

            <ul className="headerRight d-flex align-center clear ">
                <li className="mr-30">
                    <img width={20} height={20} src={cart} alt="cart"
                    onClick={onCartClick}/>
                    <span>1250 руб</span>
                </li>
                <li>
                    <img width={20} height={20} src={user} alt="user"/>
                </li>
            </ul>
        </header>
    )
}