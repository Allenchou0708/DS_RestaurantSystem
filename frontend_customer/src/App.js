import {Routes,Route,useNavigationType,useLocation} from "react-router-dom";
import My_CustomerEnd from "./pages_2/My_CustomerEnd.jsx"
import { useEffect,useReducer } from "react";
import Test_Store_Detail from "./Test_Store_Detail.js";
import Test_order from "./pages_2/Test_Order.js";
import Test_previous_order from "./pages_2/Test_Previous_Order.js";
import NoteContent from "./function/Order_Context.js";
import SentOrderPage from "./pages_2/SentOrderPage.js";
import Original_OrderPage from "./pages_2/OrderPage_backup_two_column.jsx"
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
        <Route path="/previous_order" element={<Test_previous_order></Test_previous_order>}/>
        <Route path="/store_detail" element={<Test_Store_Detail></Test_Store_Detail>}/>
        <Route path="/original_order" element={<Original_OrderPage></Original_OrderPage>}></Route>
      </Routes>
  );
}
// <NoteContent.Provider value={{order_quantity,dispatch}}>
//         <Route path="/order" element={<OrderPage></OrderPage>} exact={true}/>
//         <Route path="/sent_order" element={<SentOrderPage></SentOrderPage>}></Route>
//       </NoteContent.Provider>

export default App;
