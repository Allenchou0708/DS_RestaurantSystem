import {React,useEffect} from "react";
import { useNavigate,useOutletContext } from "react-router-dom";
import "../style/OrderPage.css"
import fetch_meal from "../function/fetch_meal";
import { add_at,sub_at } from "../Reducer/Operator";
import {aos_anime_scroll} from "../../src/function/AOS_Anime_scroll.js"
import styles from "./FullCustomerEnd.module.css";
import ListButton from "./ListButton.jsx";
import { reset_state } from "../Reducer/Operator";

const OrderPage = () => {

    const navigate = useNavigate()

    var {order_quantity_text,dispatch} = useOutletContext()
    // var {}

         
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
    let click_reset = () => {
      dispatch(reset_state())
    }

    let check_total_quantity = () => {
      let total_quantity = order_quantity_text.reduce(
        (accumulate,element) => {
           return accumulate+element
        },0
      )
      if(total_quantity>0){
        return true
      }
      return false
    }

    return (
      <div>
        <div className="scarfold d-md-none">
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
                        <img className="meal_pic" src={"./"+meal.name+".png"}/>
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
        <div className="scarfold d-none d-md-block">
          <div className="topBar">
            <div className="container hide_in_bar_cent">
              <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll/>

              <div className="top_function_list">
                <span className="top_function_hint">Table : 25 </span>
                <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
              </div> 
            </div>
          </div>

          <div className="my_container  ">
            <div className="row">
              <div className="col-8">
                <div className="row g-2">
                  
                {
                  meals.map((meal,index)=>{
                    return(
                      <div className="col-6">
                        <div className={styles.product1} id="Product" key={index}>
                          <div className={styles.rec} />
                            <div className={styles.button}>
                              <button className={styles.minus} onClick={()=>{click_minus(index)}}>
                                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                              </button>
                              <span className={styles.amount6}>{order_quantity_text[index]}</span>
                              <button className={styles.plus} onClick={()=>{click_plus(index)}}>
                                <img className={styles.vectorIcon} alt="" src="/vector.svg" /> 
                                <img className={styles.vectorIcon3} alt="" src="/vector2.svg" />
                                <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
                              </button>
                            </div>
                            <div className={styles.price6}>NT.120</div>
                            <div className={styles.title1}>
                              <div className={styles.name}>{meal.name}</div>
                            </div>
                          
                            <img
                              className={styles.karaagedon1Icon}
                              alt=""
                              src={"/"+meal.name+"_round.png"}
                            />
                        </div>
                      </div>
                    )
                  })
                }
                
                </div>
              </div>
              <div className="col-4  list_content">
              
              {
                check_total_quantity() == true ? 
                <div className="container ">
                  <div className="list md_list">
                      <div className="dishes md_dishes">
                          {meals.map((dish, index) => {
                          if (order_quantity_text[index] > 0) {
                              return (
                              <div className="each_dish" key={index}>
                                  <div className="md_dish_name ">{dish.name}</div>
                                  <div className="md_dish_quantity ">x{order_quantity_text[index]}</div>
                                  <div className="md_dish_price ">NT {dish.price * order_quantity_text[index]}</div>
                              </div>
                              );
                          }
                          return null;
                          })}
                      </div>
                      <div className="total">
                          <div className="total_name md_total_name">合計</div>
                          
                          <div className="total_price md_total_price">
                          NT{" "}
                          {meals.reduce((total,dish,index) => total + dish.price * order_quantity_text[index],
                              0
                          )}
                          </div>
                      </div>
                  </div>
                  <div className="sent_button_div">
                    <button className="btn btn-dark sentpage_order_button md_button" onClick={click_reset}>清除訂單</button>
                    <button className="btn btn-dark sentpage_order_button md_button" onClick={()=>{navigate("/")}}>送出訂單</button>
                  </div>
                </div> : 
                <div className="container memo_container">
                  <div className="list memo_list">
                      
                      <div className="memo_content">
                        請在左方選取餐點...
                      </div>
                      
                  </div>
                </div>
                
              }
              </div>
            </div>
          </div>
        </div>
      </div>
 
    ) 
}

export default OrderPage

