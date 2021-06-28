import roseRed from "../../image/rose/rose-red.png";
import minus from "../../icons/minus.png";
import plus from "../../icons/plus.png";

export const CartItem = (props) => {
    return(
        <div className="cartItem d-flex">
            <img width={80} src={roseRed} alt="rose-red"/>
            <div className="d-flex direction-column justify-center align-start">
                <p>Красные розы</p>
                <span>Цена:<b>1300</b></span>
            </div>
            <div className="count-block d-flex align-center">
                <div className="count-change d-flex justify-center  align-center">
                    <img width={20} height={20} src={minus} alt="minus"/>
                </div>
                <div className="count">
                    10
                </div>
                <div className="count-change d-flex justify-center align-center " >
                    <img width={20} height={20}  src={plus} alt="plus"/>
                </div>
            </div>
        </div>
    )
}