import { useEffect} from "react";
import styles from "./CustomerEnd.module.css";
// import "../style/My_CustomerEnd.css";
import {aos_anime_scroll} from "../../src/function/AOS_Anime_scroll.js"
import { useNavigate } from "react-router-dom";



const CustomerEnd = () => {
  
  const navigate = useNavigate()

  useEffect(aos_anime_scroll, []);


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
              <div className="item ">
                <img src="/DonFan.jpg" className={`object-fit-cover mb-lg-2 ${styles.img_width} ${styles.img_height}`}/>
                <button onClick={()=>{navigate("/order")}} className={`btn py-2 mt-lg-3 bg-dark text-white ${styles.button_width}`}>
                  <h1>我要點餐</h1>            
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="item">
                <img src="/YDL_Menu.jpg" className={`object-fit-cover mb-lg-2 ${styles.img_width} ${styles.img_height}`}/>
                <button onClick={()=>{navigate("/previous_order")}} className={`btn py-2 mt-lg-3 bg-dark text-white ${styles.button_width}`}>
                  <h1>訂單狀況</h1>            
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="item">
                <img src="/YDLS.jpg" className={`object-fit-cover mb-lg-2 ${styles.img_width} ${styles.img_height}`}/>
                <button onClick={()=>{navigate("/store_detail")}} className={`btn py-2 mt-lg-3 bg-dark text-white ${styles.button_width}`}>
                  <h1>關於店家</h1>            
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
