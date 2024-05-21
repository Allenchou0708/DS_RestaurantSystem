import "../style/Previous_Order.css"
import fetch_order from "../function/fetch_order"
import fetch_meal from "../function/fetch_meal"
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

import styles from "./FullCustomerEnd.module.css";

let Previous_order = () => {

    
    var [order_list, change_order_list] = useState([])


    var meals = fetch_meal()

    var navigate = useNavigate()

    let [choose_order,set_choose_order] = useState(-1)

    let check_total_quantity = () => {
        // let total_quantity = order_quantity_text.reduce(
        //   (accumulate,element) => {
        //      return accumulate+element
        //   },0
        // )
        // if(total_quantity>0){
        //   return true
        // }
        return false
      }
    
    let show_attribute = (index) => {

      var buttonElement = document.getElementById("accordion_button"+index);
      var content = document.getElementById("collapse"+index)

      var ariaExpanded = buttonElement.getAttribute('my_open');

      // alert("aria-expanded = "+ariaExpanded)

      if(ariaExpanded == "true"){
        
        buttonElement.classList.add("collapsed")
        buttonElement.setAttribute('my_open',"false")
        content.classList.remove("show")
        
        content.classList.add("my_collapse")
        // alert("expand : " + buttonElement.getAttribute("aria-expanded"))
        // alert("expand : " + buttonElement.classList)
        
      }else{
        var buttons = document.querySelectorAll('.accordion-button');

        buttons.forEach(function(button) {
            button.setAttribute('my_open', 'false');
        });

        buttonElement.classList.remove("collapsed")
        buttonElement.setAttribute('my_open',"true")
        content.classList.add("show")
        content.classList.remove("my_collapse")
        // alert("collapse : " + buttonElement.getAttribute("aria-expanded"))
        // alert("collapse : " + buttonElement.classList)
      }



    }

    let show_attribute_md = (index) => {

      var buttonElement = document.getElementById("accordion_button_md"+index);

      var ariaExpanded = buttonElement.getAttribute('my_open');

      // alert("aria-expanded = "+ariaExpanded)

      if(ariaExpanded == "true"){
        
        buttonElement.classList.add("collapsed")
        buttonElement.setAttribute('my_open',"false")
        set_choose_order(-1)

        
      }else{
          var buttons = document.querySelectorAll('.accordion-button');
          var delete_box = document.querySelectorAll('.accordion-button');

          buttons.forEach(function(button) {
              button.setAttribute('my_open', 'false');
          });
          set_choose_order(-1)
          
          buttonElement.classList.remove("collapsed")
          buttonElement.setAttribute('my_open',"true")
          set_choose_order(index)
      }

      

    }

    let order_complete = (choose_order) => {
      var new_order_list = order_list.filter((order,index)=>{
        return index != choose_order
      })
      change_order_list(new_order_list)

      var buttons = document.querySelectorAll('.accordion-button');  
        buttons.forEach(function(button) {
          button.setAttribute('my_open', 'false');
      });
      set_choose_order(-1)
    }

    useEffect(
      () =>{
        return () => {
          alert("Store")
        }
      },[]
    ) // Do when unmount

    useEffect(
      () =>{
        var fetched_order_list = fetch_order()
        change_order_list(fetched_order_list)

      },[]
    ) // Do when mount

    return (
        
        <div className="scofford">
            <div className="topBar mb-3">
                <div className="container hide_in_bar_cent">
                <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll/>

                <div className="top_function_list">
                    <span className="top_function_hint">Table : 25 </span>
                    <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
                </div> 
                </div>
            </div>
            
            <div className="container previous_order_container d-md-none mt-5">
                <div class="accordion" id="accordionExample">
                    {
                        order_list.map((order,index)=>{
                            return(
                            <div className="accordion-item mb-3 " key={index}>
                                <h2 className="accordion-header ">
                                    <button my_open="false" id={"accordion_button"+index} onClick={()=>{show_attribute(index)}} className="accordion-button px-4 collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index}>
                                      <div className="order_number">
                                        {index+1}
                                      </div>
                                      <div className="order_detail">
                                        <div className=" d-flex"> 
                                          <span class="material-symbols-outlined">monetization_on</span>
                                          <span>NT {order.price}</span>
                                        </div>
                                        <div className=" d-flex">
                                          <span class="material-symbols-outlined">table_restaurant</span>
                                          <span>Table {25}</span>
                                        </div>

                                      
                                        <div className=" d-flex"> 
                                          <span class="material-symbols-outlined">monetization_on</span>
                                          <span>NT {order.price}</span>
                                        </div>
                                        <div className=" d-flex"> 
                                          <span class="material-symbols-outlined">schedule</span>
                                          <span>{order.time}</span>
                                        </div>
                                      </div>
                                    </button>
                                </h2>
                                <div id={"collapse"+index} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body collapsed">
                                        
                                    {
                                        meals.map((dish, dish_index) => {
                                        
                                        if (order_list[index].meals[dish_index] > 0) {
                                            return (
                                                // <div/>
                                                <div className="sm_each_dish" key={index}>
                                                    <div className="sm_dish_name ">{dish.name}</div>
                                                    <div className="sm_dish_quantity ">x{order_list[index].meals[dish_index]}</div>
                                                    <div className="sm_dish_price ">NT {dish.price * order_list[index].meals[dish_index]}</div>
                                                </div>
                                            );}

                                        })
                                    }

                                    </div>
                                </div>
                            </div>)
                            
                        })
                    }
                    
                </div>
            </div>

            <div className="my_container  d-none d-md-block">
              {
                order_list.length === 0 ?
                <div className="row">
                  <div className="col-12">
                    <div className="memo_container">
                      <div className="list memo_list">
                        <div className="memo_content">
                          已完成所有訂單 !!!
                        </div>
                          
                      </div>
                    </div>
                  </div> 
                </div>
                : 

                <div className="row">
                  <div className="col-7">
                    <div className="container previous_order_container mt-5">
                      <div class="accordion" id="accordionExample">
                          {
                              order_list.map((order,index)=>{
                                  return(
                                    <div className="accordion-item accordion-item_md mb-3" key={index}>
                                        <h2 className="accordion-header ">
                                            <button my_open="false" id={"accordion_button_md"+index} onClick={()=>{show_attribute_md(index)}} className="accordion-button px-4 collapsed d-flex" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+index} aria-expanded="false" aria-controls={"collapse"+index}>
                                              <div className="order_number order_number_md">
                                                {index}
                                              </div>
                                              <div className="order_detail order_detail_md">
                                                <div className=" d-flex">
                                                  <span class="material-symbols-outlined">table_restaurant</span>
                                                  <span>Table {25}</span>
                                                </div>
                                                <div className=" d-flex"> 
                                                  <span class="material-symbols-outlined">monetization_on</span>
                                                  <span>NT {order.price}</span>
                                                </div>
                                                <div className=" d-flex"> 
                                                  <span class="material-symbols-outlined">schedule</span>
                                                  <span>{order.time}</span>
                                                </div>
                                              </div>
                                            </button>
                                        </h2>
                                      
                                    </div>
                                  
                                  )
                                  
                              })
                          }
                          
                      </div>
                    </div>
                  </div>
                  <div className="col-5  list_content">
                  
                  {
                    choose_order != -1 ?
                    <div className="container ">
                      <div className="list md_list w-100">
                          <div className="dishes md_dishes">
                          {
                            meals.map((dish, dish_index) => {
                            
                            if (order_list[choose_order].meals[dish_index] > 0) {
                                return (
                                    <div className="each_dish " key={dish_index}>
                                        {
                                          order_list[choose_order].checked[dish_index] === true?
                                          <div className="d-flex justify-content-start delete_line" id={"delete_box"+dish_index}>
                                            <div className="md_dish_name w-100">{dish.name+ " x "}{order_list[choose_order].meals[dish_index]}</div>
                                          </div> :
                                          <div className="d-flex justify-content-start" id={"delete_box"+dish_index}>
                                            <div className="md_dish_name ">{dish.name}</div>
                                            <div className="md_dish_quantity ">x{order_list[choose_order].meals[dish_index]}</div>
                                          </div> 
                                        }
                                        <div class="form-check">
                                          <input onChange={
                                            (e)=> {

                                              var original_order_list = Array.from(order_list)
                                              original_order_list[choose_order].checked[dish_index] = e.target.checked
                                              change_order_list(original_order_list)
                                            }
                                          } class="form-check-input" order_index="6" checked={order_list[choose_order].checked[dish_index]} type="checkbox" value="" id={"Checkbox"+dish_index}/>
                                          <label class="form-check-label" for={"Checkbox"+dish_index}/>
                                        </div>
                                    </div>
                                );}
                              // return <p>Hello {choose_order}</p>

                            })
                            
                        }
                          </div>
                          <div className=" d-flex justify-content-center mt-4">
                              <button className="btn btn-primary" onClick={()=>{order_complete(choose_order)}}>完成訂單</button>
                          </div>
                      </div>
                    </div> : 
                    <div className="container memo_container">
                      <div className="list memo_list">
                        <div className="memo_content">
                          請在左方選取訂單...
                        </div>
                          
                      </div>
                    </div>
                    
                  }
                  </div>
                </div>

              }
      
            </div>
        </div>
        // <p> Hello</p>

    )
}

export default Previous_order