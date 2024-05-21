import { useEffect} from "react";
import styles from "./CustomerEnd.module.css";
// import "../style/My_CustomerEnd.css";
import {aos_anime_scroll} from "../../src/function/AOS_Anime_scroll.js"
import { useNavigate } from "react-router-dom";
import debugs from "../style/debug.module.css"
import fetch_material_status from "../function/material_status.js";



const CustomerEnd = () => {
  
  const navigate = useNavigate()

  useEffect(aos_anime_scroll, []);

  useEffect(
    ()=> {
      var material_button = document.getElementById("material_button")
      switch(fetch_material_status()){
        case "material_reset":
          material_button.classList.add("btn-primary")
        break;
        case "material_warning":
          material_button.classList.add("btn-danger")
        break;
        default:
          material_button.classList.add("btn-dark")
      }
      // alert(material_button.classList)
        
    }
    ,[]
  )

  return (

    <main className={styles.customerEnd}>

      <div className={styles.topBar}>
        <div className={`container ${styles.hide_in_bar_cent}`}>
          <img
            className={`${styles.yuandonliIcon}`}
            src="/yuandonli@2x.png"
            data-animate-on-scroll
          />
          <div className={`${styles.top_function_list}`}>
            <span className={styles.top_function_hint}>
              Table : 25            
            </span>
          </div> 
        </div>
      </div>  

      <div className=" container-fluid ">
        <div className={`container align-content-center ${styles.v_align_container}`} >
          <div className="row g-5 ">
            
            <div className="col-12 col-lg-4">
              <div className="item d-flex d-lg-inline-block align-content-center justify-content-center">
                <img src="/Order_image.jpg" className={`object-fit-cover mb-lg-2 ${styles.img_width} ${styles.img_height}`}/>
                <button onClick={()=>{navigate("/previous_order")}} className={` btn py-2 mt-lg-3 bg-dark text-white ${styles.button_width}`}>
                  <h1 className="h3 py-md-2">當前訂單</h1>            
                </button>
              </div>
            </div>


            <div className="col-12 col-lg-4">
              <div className="item d-flex d-lg-inline-block align-content-center justify-content-center">
                <img src="/Analyze_Page.jpg" className={`object-fit-cover mb-lg-2 ${styles.img_width} ${styles.img_height}`}/>
                <button onClick={()=>{navigate("/analyze")}} className={`btn py-2 mt-lg-3 bg-dark text-white ${styles.button_width}`}>
                  <h1 className="h3 py-md-2">數據分析</h1>            
                </button>

              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="item d-flex d-lg-inline-block align-content-center justify-content-center">
                <img src="/Material_Page.jpg" className={`object-fit-cover mb-lg-2 ${styles.img_width} ${styles.img_height} d-inline-block-sm`}/>
                <button onClick={()=>{navigate("/order")}} id="material_button" className={["btn", "py-2", "mt-lg-3", "text-white", styles.button_width ,"d-inline-block-sm" ].join(" ")}>
                  <h1 className={["h3", "py-md-2"].join(" ")}>物料狀況</h1>            
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>    
      
    </main>
  );
};


export default CustomerEnd;
