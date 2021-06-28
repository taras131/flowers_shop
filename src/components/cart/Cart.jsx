import {CartItem} from "./CartItem";
import rightArrow from "../../icons/right-arrow.png"
import close from "../../icons/close.png"

export const Cart = ({isShowCart, setIsShowCart}) => {
    const classNames = isShowCart ? "cart-wrapper" : "hidden"
    const onExitClick = () => {
        setIsShowCart(false)
    }
    return (
        <div className={classNames}>
            <div className="cart d-flex direction-column">
                <h2 className="d-flex justify-between align-center">
                    Корзина:
                    <img src={close} alt="close" onClick={onExitClick}/>
                </h2>
                <div className="items">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </div>
               <div className="total-block">
                   <ul className="total-block">
                       <li>
                           <span>Итого:</span>
                           <div></div>
                           <b>242523 p.</b>
                       </li>
                       <li>
                           <span>Скидка:</span>
                           <div></div>
                           <b>0 p.</b>
                       </li>
                   </ul>
                   <button>
                       Оформить заказ
                       <img width={35} height={35} src={rightArrow} alt="rightArrow"/>
                   </button>
               </div>
            </div>
        </div>
    )
}