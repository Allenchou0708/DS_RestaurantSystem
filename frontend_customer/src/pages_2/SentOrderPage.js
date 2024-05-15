import {React,useEffect} from "react";
import { Outlet, useOutletContext,useNavigate } from "react-router-dom";
import { add_at } from "../Reducer/Operator";
import "../style/SentOrderPage.css"
import "../style/OriginalSentPage.css"
import fetch_meal from "../function/fetch_meal";
import {aos_anime_scroll} from "../../src/function/AOS_Anime_scroll.js"

const SentOrderPage = () => {

    var navigate = useNavigate()

    var {order_quantity_text,dispatch} = useOutletContext()

    let add = (place) => {
        dispatch(add_at(place))
    }
    let dishes = fetch_meal()

    useEffect(
        aos_anime_scroll, []
      );
         
    return (
        <div className="scarfold">
            <div className="topBar">
                <div className="container hide_in_bar_cent">
                    <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll/>
                    <div className="top_function_list">
                        <span className="top_function_hint">Table : 25 </span>
                        <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
                    </div> 
                </div>
            </div>

            

            <div className="container content">
            
                <div className="list">
                    <div className="dishes">
                        {dishes.map((dish, index) => {
                        if (order_quantity_text[index] > 0) {
                            return (
                            <div className="each_dish" key={index}>
                                <div className="dish_name ">{dish.name}</div>
                                <div className="dish_quantity ">x{order_quantity_text[index]}</div>
                                <div className="dish_price ">NT {dish.price * order_quantity_text[index]}</div>
                            </div>
                            );
                        }
                        return null;
                        })}
                    </div>
                    <div className="total">
                        <div className="total_name">合計</div>
                        
                        <div className="total_price">
                        NT{" "}
                        {dishes.reduce((total,dish,index) => total + dish.price * order_quantity_text[index],
                            0
                        )}
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className="sent_button_div">
                <button className="btn btn-dark sentpage_order_button" onClick={()=>{navigate("/order")}}>修改訂單</button>
                <button className="btn btn-dark sentpage_order_button" onClick={()=>{navigate("/")}}>送出訂單</button>
            </div>
            <div className="footer"/>
        </div>
    )

}

export default SentOrderPage