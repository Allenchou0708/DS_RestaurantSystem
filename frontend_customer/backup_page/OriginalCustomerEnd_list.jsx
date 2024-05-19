import { useCallback, useEffect, useState } from "react";
import styles from "./CustomerEnd.module.css";
import ListButton from '../src/pages_2/ListButton.jsx';

const Originally_CustomerEnd = () => {
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

  return (
    <main className={styles.customerEnd}>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.3.2/socket.io.js"></script>
      <div className={styles.content}>
        <div className={styles.list}>
          <div className={styles.dishes}>
            {dishes.map((dish, index) => {
              if (dish.quantity > 0) {
                return (
                  <div className={styles.dish1} key={index}>
                    <div className={styles.name}>{dish.name}</div>
                    <div className={styles.amount}>x{dish.quantity}</div>
                    <div className={styles.price}>NT {dish.total_price}</div>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className={styles.total}>
            <div className={styles.name5}>合計</div>
            
            <div className={styles.price5}>
              NT{" "}
              {dishes.reduce(
                (total, dish) => total + dish.total_price,
                0
              )}
            </div>
          </div>
        </div>
        <div className={styles.title}>
          <div className={styles.name}>我的訂單</div>
        </div>
        <div className={styles.line} />
        
      </div>
      <div className={styles.topBar}>
        <img
          className={styles.yuandonliIcon}
          alt=""
          src="/yuandonli@2x.png"
          data-animate-on-scroll
        />
      </div>
    </main>
  );
};

export default Originally_CustomerEnd;
