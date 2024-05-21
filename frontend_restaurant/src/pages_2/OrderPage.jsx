import { React,useState } from "react";
import { useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "../style/OrderPage.css"

import { Button, ProgressBar } from "react-bootstrap";
import fetch_now_material_portion from "../function/fetch_total_material";
import fetch_material_name from "../function/fetch_material_name";

const OrderPage = () => {

    const navigate = useNavigate()

    var original_now_material_portion = fetch_now_material_portion()
    var material_name = fetch_material_name()

    var [now_material_portion,change_portion] = useState(original_now_material_portion)


    var buttons = document.querySelectorAll('.accordion-button');  
    buttons.forEach(function(button) {
      button.setAttribute('my_open', 'false');
    });

    let click_reset = () => {
      var new_material_portion = now_material_portion.slice().fill(100)
      change_portion(new_material_portion)
      // alert(now_material_portion)
      alert("存")
    }

  
    return (
      <div>
        <div className="scarfold">
          <div className="topBar mb-5">
            <div className="container hide_in_bar_cent">
              <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll alt="yuandonli"/>

              <div className="top_function_list">
                <Button className="px-3 py-2 me-4" variant="secondary" onClick={()=>{navigate("/adjust_material")}}>調整原料</Button>
                <Button className="px-3 py-2 me-4" variant="secondary" onClick={()=>{navigate("/adjust_formula")}}>調整公式</Button>
                <Button className="px-3 py-2 me-4" variant="primary" onClick={() => {click_reset()}}>Reset</Button>
                <span className="top_function_hint">Table : 25 </span>
                <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{alert("存原料、公式變動"); navigate("/")}}>home</span>
              </div> 
            </div>
          </div>
          <div className="container">
          {
            now_material_portion.map((portion,index)=>{
              return(
                <div className="row mb-3" key={index}>
                  <div className="col-3">
                    <span class="badge text-bg-secondary ml-auto px-5 bg-black opacity-75 w-100" style={{height:"5vw",fontSize:"3vw"}}>{material_name[index]}</span>
                  </div>
                  <div className="col-9 d-flex align-items-center" style={{height:"5vw"}} >
                    {
                      portion >= 80 ?
                      <ProgressBar className="progressbar w-100" now={portion} variant="success" style={{height:"4vw"}} label={`${portion}%`}></ProgressBar>
                      : portion >=60 ?
                      <ProgressBar className="progressbar w-100" now={portion} variant="warning" style={{height:"4vw"}} label={`${portion}%`}></ProgressBar>
                      :
                      <ProgressBar className="progressbar w-100" now={portion} variant="danger" style={{height:"4vw"}} label={`${portion}%`}></ProgressBar>
                    }
                  </div>
              </div>

              )
            })

          }
            
          </div>
        </div>  
      </div>
 
    ) 
}

export default OrderPage

