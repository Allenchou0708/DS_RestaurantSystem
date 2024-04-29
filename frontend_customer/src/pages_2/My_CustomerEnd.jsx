import { useCallback, useEffect, useState } from "react";
import styles from "./CustomerEnd.module.css";
import ListButton from './ListButton.jsx';

const CustomerEnd = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);

  const dishes = [
    {
      name: "原丼力炸雞丼",
      quantity: count1,
      price: 120,
      total_price: 120 * count1,
    },
    {
      name: "香煎嫩雞腿丼",
      quantity: count2,
      price: 120,
      total_price: 120 * count2,
    },
    {
      name: "味噌烤鯖魚飯",
      quantity: count3,
      price: 160,
      total_price: 160 * count3,
    },
    {
      name: "日式炸豬排丼",
      quantity: count4,
      price: 130,
      total_price: 130 * count4,
    },
    {
      name: "骰子牛肉丼",
      quantity: count5,
      price: 180,
      total_price: 180  * count5,
    },
    {
      name: "鹽烤松阪豬丼",
      quantity: count6,
      price: 160,
      total_price: 160 * count6,
    },
  ];

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  // return(
  //   <h1> Hello World</h1>
  // )

  return (
    <main className={styles.customerEnd}>
      <div className={styles.topBar}>
        <img
          className={styles.yuandonliIcon}
          src="/yuandonli@2x.png"
          data-animate-on-scroll
        />
      </div>  

      <div className=" container-fluid ">
        <div className=" container align-content-center" style={v_align_container}>
          <div className="row g-5 ">
            <div className=" col-4">
              <div className="item ">
                <img src="/DonFan.jpg" style={img_height} className=" bg-danger object-fit-cover mb-2 w-100"/>
                <button className="btn py-2 mt-3 bg-dark text-white w-100">
                  <h1>我要點餐</h1>            
                </button>
              </div>
            </div>
            <div className=" col-4">
              <div className="item">
                <img style={img_height} src="/YDL_Menu.jpg" className=" object-fit-cover mb-2 w-100"/>
                <button className="btn py-2 mt-3 bg-dark text-white w-100">
                  <h1>訂單狀況</h1>            
                </button>
              </div>
            </div>
            <div className=" col-4">
              <div className="item">
                <img style={img_height} src="/YDLS.jpg" className=" object-fit-cover mb-2 w-100"/>
                <button className="btn py-2 mt-3 bg-dark text-white w-100">
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

const v_align_container = {
  height: "80vh",
}

const img_height = {
  height: "50vh",
}



export default CustomerEnd;
