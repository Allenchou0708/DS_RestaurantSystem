import React from "react";
import { useNavigate,useOutletContext } from "react-router-dom";


const OrderPage = () => {

    const navigate = useNavigate()

    var {order_quantity_text,dispatch} = useOutletContext()
         

    return (
        <div>
            <p>I am {order_quantity_text} OrderPage </p>
            <button onClick={()=>{navigate("/sent_order")}}>go to Sent Order</button>
            
        </div>
    )
}

export default OrderPage

//<Outlet context={{"order_quntity":order_quntity,"dispatch":dispatch}}></Outlet>