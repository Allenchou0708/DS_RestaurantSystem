import {React,useEffect,useState,useReducer} from "react";
import {Outlet} from "react-router-dom";
import Order_Reducer from "../Reducer/Order_Reducer";
import fetch_meal from "./fetch_meal";
import { update_state } from "../Reducer/Operator";


const NoteContent = () => {
  var [order_quantity_text,dispatch] = useReducer(Order_Reducer,[])
 

  useEffect(()=>{
    const meals = fetch_meal()
    var order_quantity = Array.from({ length: meals.length }, () => 10);
    dispatch(update_state(order_quantity))
    
  },[])

  return <Outlet context={{order_quantity_text,dispatch}}></Outlet>
}

export {NoteContent as default} 


 