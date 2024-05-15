import React from "react";
import { useNavigate,useOutletContext } from "react-router-dom";
import "./CustomerEnd.css";

const OrderPage = () => {

    const navigate = useNavigate()

    var {order_quantity_text,dispatch} = useOutletContext()

    var count1 = 1
    var count2 = 2
         

    return (
        <main className="customerEnd">
          <div className="content">
            <div className="products" id="products">
              <div className="row1">
              
                <div className="product1" id="Product">
                  <div className="rec" />

                  <div className="button">
                    <button className="minus" onClick={() => {
                        if (count1 > 0) {
                            setCount1(count1 - 1);
                        }
                    }}>
                      <img className="vectorIcon" alt="" src="/vector.svg" />
                      <img className="vectorIcon1" alt="" src="/vector1.svg" />
                    </button>
                    <span className="amount6">{count1}</span>
                    <button className="plus" onClick={() => setCount1(count1 + 1)}>
                      <img className="vectorIcon" alt="" src="/vector.svg" /> 
                      <img className="vectorIcon3" alt="" src="/vector2.svg" />
                      <img className="vectorIcon1" alt="" src="/vector1.svg" />
                    </button>
                  </div>

                  <div className="price6">NT.120</div>

                  <div className="title1">
                    <div className="name">原丼力炸雞丼</div>
                  </div>

                  <img
                    className="karaagedon1Icon"
                    alt=""
                    src="/karaagedon-1@2x.png"
                  />
                </div>
                <div className="product1" id="Product">
                  <div className="rec" />
                  <div className="button">
                    <button className="minus" onClick={() => {
                        if (count2 > 0) {
                            setCount2(count2 - 1);
                        }
                    }}>
                      <img className="vectorIcon" alt="" src="/vector.svg" />
                      <img className="vectorIcon1" alt="" src="/vector1.svg" />
                    </button>
                    <span className="amount6">{count2}</span>
                    <button className="plus" onClick={() => setCount2(count2 + 1)}>
                      <img className="vectorIcon" alt="" src="/vector.svg" /> 
                      <img className="vectorIcon3" alt="" src="/vector2.svg" />
                      <img className="vectorIcon1" alt="" src="/vector1.svg" />
                    </button>
                  </div>
                  <div className="price6">NT.120</div>
                  <div className="title1">
                    <div className="name">香煎嫩雞腿丼</div>
                  </div>
                  <div className="image">
                    <img
                      className="karaagedon1Icon"
                      alt=""
                      src="/chickendon.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topBar">
            <img
              className="yuandonliIcon"
              alt=""
              src="/yuandonli@2x.png"
              data-animate-on-scroll
            />
          </div>
        </main>
    ) 
}

export default OrderPage

//<Outlet context={{"order_quntity":order_quntity,"dispatch":dispatch}}></Outlet>