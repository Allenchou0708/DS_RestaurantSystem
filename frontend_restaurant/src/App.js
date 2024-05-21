import {Routes,Route,useNavigationType,useLocation} from "react-router-dom";
import My_CustomerEnd from "./pages_2/My_CustomerEnd.jsx"
import { useEffect,useReducer } from "react";
import Test_order from "./pages_2/Test_Order.js";
import Previous_order from "./pages_2/Previous_Order.js";
import NoteContent from "./function/Order_Context.js";
import SentOrderPage from "./pages_2/SentOrderPage.js";
import OrderPage from "./pages_2/OrderPage.jsx";
import Adjust_Formula from "./pages_2/adjust_formula.js";
import Adjust_Material from "./pages_2/adjust_material.js";
import Analyze from "./pages_2/analyze.jsx";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<My_CustomerEnd />} exact={true}/>
        <Route path="/sent_order" element={<SentOrderPage></SentOrderPage> } exact={true}/>
        <Route path="/order" element={<OrderPage></OrderPage>} exact={true}/>
        <Route path="/previous_order" element={<Previous_order></Previous_order>}/>
        <Route path="/adjust_material" element={<Adjust_Material></Adjust_Material>}/>
        <Route path="/adjust_formula" element={<Adjust_Formula></Adjust_Formula>}/>
        <Route path="/analyze" element={<Analyze></Analyze>}></Route>
      </Routes>
  );
}
// <NoteContent.Provider value={{order_quantity,dispatch}}>
//         <Route path="/order" element={<OrderPage></OrderPage>} exact={true}/>
//         <Route path="/sent_order" element={<SentOrderPage></SentOrderPage>}></Route>
//       </NoteContent.Provider>

export default App;
