import {Card} from "./components/Card";
import {Header} from "./components/Header";
import search from "./icons/search.png";
import {Cart} from "./components/cart/Cart";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {getFlowers} from "./redux/flowersReducer";

const App = () => {
    const [isShowCart, setIsShowCart] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFlowers())
    }, [])
    return (
        <div>
            <div className="wrapper">
                <Cart isShowCart={isShowCart} setIsShowCart={setIsShowCart}/>
                <Header setIsShowCart={setIsShowCart}/>
                <div className="p-40 content">
                    <div className="d-flex justify-between align-center">
                        <h1>Все цветы</h1>
                        <div className="search-wrapper d-flex align-center">
                            <img width={15} height={15} src={search} alt="Search"/>
                            <input className="search" type="text" placeholder="Поиск..."/>
                        </div>
                    </div>

                    <div className="d-flex justify-center">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
