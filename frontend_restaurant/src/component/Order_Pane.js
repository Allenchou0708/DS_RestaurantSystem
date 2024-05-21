import React from "react"
 let  Order_Pane = (props) =>
    
    <div className="wraper">
        <div> 
            <img className="meal_pic" src="https://picsum.photos/100/100/?random=10"/>
        </div>
        <div className="verticle_box">
            <div className="meal_title">
                <div className="meal_name">{props.name}</div>
                <div className="meal_price">NT. {props.price}</div>
            </div>
            <div className="meal_opperate">
                <span className="material-symbols-outlined ">do_not_disturb_on</span>
                <span className="quantity ">{props.quantity}</span>
                <span className="material-symbols-outlined ">add_circle</span> 
            </div>
        </div>
    </div>  

export default Order_Pane