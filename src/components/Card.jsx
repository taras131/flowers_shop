import roseRed from "../image/rose/rose-red.png";
import plus from "../icons/plus.png";
import heartUnliked from "../icons/heart-unliked.png"

export const Card = (props) => {
    return(
        <div className="card p-20 d-flex direction-column justify-between">
            <div className="img-wrapper d-flex direction-column align-center">
                <button >
                    <img width={20} height={20} src={heartUnliked} alt="heartUnliked"/>
                </button>
                <img width={120} src={roseRed} alt="rose-red"/>
                <h5>Красные розы</h5>
            </div>
            <div className="d-flex justify-between align-center">
                <div className="d-flex direction-column  align-start">
                    <span>Цена:</span>
                    <b>300 рублей</b>
                </div>
                <button >
                    <img width={20} height={20} src={plus} alt="plus"/>
                </button>
            </div>
        </div>
    )
}