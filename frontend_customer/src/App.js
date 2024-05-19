import {Routes,Route,useNavigationType,useLocation} from "react-router-dom";
import My_CustomerEnd from "./pages_2/My_CustomerEnd.jsx"
import { useEffect,useReducer } from "react";
import Store_Detail from "./pages_2/Store_Detail.js";
import Test_order from "./pages_2/Test_Order.js";
import Previous_order from "./pages_2/Previous_Order.js";
import NoteContent from "./function/Order_Context.js";
import SentOrderPage from "./pages_2/SentOrderPage.js";
import OrderPage from "./pages_2/OrderPage.jsx";

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
        <Route element={<NoteContent></NoteContent>}>
          <Route path="/sent_order" element={<SentOrderPage></SentOrderPage> } exact={true}/>
          <Route path="/order" element={<OrderPage></OrderPage>} exact={true}/>
        </Route>
        <Route path="/previous_order" element={<Previous_order></Previous_order>}/>
        <Route path="/store_detail" element={<Store_Detail></Store_Detail>}/>
      </Routes>
  );
}
// <NoteContent.Provider value={{order_quantity,dispatch}}>
//         <Route path="/order" element={<OrderPage></OrderPage>} exact={true}/>
//         <Route path="/sent_order" element={<SentOrderPage></SentOrderPage>}></Route>
//       </NoteContent.Provider>

export default App;
