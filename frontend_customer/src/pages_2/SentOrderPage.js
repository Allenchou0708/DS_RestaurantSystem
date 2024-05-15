import React from "react";
import { Outlet, useOutletContext,useNavigate } from "react-router-dom";
import { add_at } from "../Reducer/Operator";

const SentOrderPage = () => {

    var navigate = useNavigate()

    var {order_quantity_text,dispatch} = useOutletContext()

    let add = (place) => {
        dispatch(add_at(place))
    }
         
    return (
        <div>
            <p>I am Sent OrderPage {order_quantity_text.join(",")} Page</p>
            <button onClick={()=>{add(1)}}>add 1</button>
            <button onClick={()=>{navigate("/order")}}>go to Sent Order</button>
        </div>
    )

}

export default SentOrderPage