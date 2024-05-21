import React from "react";
import { useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "../style/OrderPage.css"
import debug from "../style/debug.module.css"

import { Button, ProgressBar } from "react-bootstrap";

const Template = () => {

    const navigate = useNavigate()
  
    return (
      <div className="scarfold">
        <div className="topBar mb-5">
          <div className="container hide_in_bar_cent">
            <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll alt="yuandonli"/>

            <div className="top_function_list">
              <span className="top_function_hint">Table : 25 </span>
              <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
            </div> 
          </div>
        </div>
      </div> 
    ) 
}

export default Template

