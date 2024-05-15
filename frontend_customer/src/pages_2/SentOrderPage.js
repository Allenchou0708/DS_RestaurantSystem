import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { add_at } from "../Reducer/Operator";

const SentOrderPage = () => {

    var {order_quantity_text,dispatch} = useOutletContext()

    let add = (place) => {
        // alert(place)
        dispatch(add_at(place))
    }
         
    return (
        <div>
            <p>I am Sent OrderPage {order_quantity_text} Page</p>
            <button onClick={()=>{add(1)}}>add 1</button>
        </div>
    )

}

export default SentOrderPage