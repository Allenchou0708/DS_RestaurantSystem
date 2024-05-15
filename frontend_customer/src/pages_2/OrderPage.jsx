import {React,useEffect} from "react";
import { useNavigate,useOutletContext } from "react-router-dom";
import "../style/OrderPage.css"
import fetch_meal from "../function/fetch_meal";
import { add_at,sub_at } from "../Reducer/Operator";
import {aos_anime_scroll} from "../../src/function/AOS_Anime_scroll.js"

const OrderPage = () => {

    const navigate = useNavigate()

    var {order_quantity_text,dispatch} = useOutletContext()
    // var {}

    var count1 = 1
    var count2 = 2
         
    var meals = fetch_meal()

    useEffect(
      aos_anime_scroll, []
    );

    let click_plus = (index) =>{
      dispatch(add_at(index))
    }
    let click_minus = (index) =>{
      dispatch(sub_at(index))
    }

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
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-11">
            {
              meals.map((meal,index)=>{
                return (
                  <div className="wraper" key={index}>
                    <div> 
                      <img className="meal_pic" src={"https://picsum.photos/100/100/?random="+index}/>
                    </div>
                    <div className="verticle_box">
                      <div className="meal_title">
                        <div className="meal_name">{meal.name}</div>
                        <div className="meal_price">NT. {meal.price}</div>
                      </div>
                      <div className="meal_opperate">
                        <span className="material-symbols-outlined " onClick={()=>{click_minus(index)}}>do_not_disturb_on</span>
                        <span className="quantity ">{order_quantity_text[index]}</span>
                        <span className="material-symbols-outlined " onClick={()=>{click_plus(index)}}>add_circle</span> 
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div>             
          </div>
        </div>
        <div className="sent_button_div">
            <button className="btn btn-dark sent_order_button" onClick={()=>{navigate("/sent_order")}}>送出訂單</button>
        </div>
        <div className="footer"> </div>
        {
        // <div className="sent_order" onClick={()=>{navigate("/sent_order")}}>
        //   <div>
        //   送出
        //   </div>
        //   <div>
        //   訂單
        //   </div>
        // </div>
        }
      </div>
      
    ) 
}

export default OrderPage

