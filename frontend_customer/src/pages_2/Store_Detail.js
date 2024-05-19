import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Carousel.css"
import sprite from "../component/arrow.svg"
import { useNavigate } from "react-router-dom";

let Store_Detail = () => {

    const navigate = useNavigate()

    // const images = [
    //   "https://picsum.photos/300/500/?random=10",
    //   "https://picsum.photos/300/500/?random=20",
    //   "https://picsum.photos/300/500/?random=30"
    // ];

    // const images_md = [
    //   "https://picsum.photos/1500/700/?random=10",
    //   "https://picsum.photos/1500/700/?random=20",
    //   "https://picsum.photos/1500/700/?random=30"
    // ];

    const images = [
      "./slide_1.jpg",
      "./slide_2.jpg",
      "./slide_3.jpg"
    ];

    const images_md = [
      "./md_slide_1.jpg",
      "./md_slide_2.jpg",
      "./md_slide_3.jpg"
    ];



    let change_state = (currentItem, total) => <div></div>

    let arrow_next = (clickHandler, hasNext) => {
      return (
        hasNext && (
          <button className="nav_btn nav_btn_right" onClick={clickHandler}>
            <svg>
              <use xlinkHref={sprite + "#right"}></use>
            </svg>
          </button>
        )
      );
    }

    let arrow_prev = (clickHandler, hasNext) => {
      return (
        hasNext && (
          <button onClick={clickHandler} className="nav_btn nav_btn_left">
            <svg>
              <use xlinkHref={sprite + "#left"}></use>
            </svg>
          </button>
        )
      );
    }


    return (
        <div>
          <div className="box d-md-none">
            <div className="topBar">
              <div className="container hide_in_bar_cent">
                <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll/>
                <div className="top_function_list">
                  <span className="top_function_hint">Table : 25 </span>
                  <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
                </div> 
              </div>
            </div>
            <div className="carousel_box">
              <Carousel className="carousel_size" useKeyboardArrows={true}
                statusFormatter={change_state}
                renderArrowNext = {arrow_next}
                renderArrowPrev = {arrow_prev}>
                {images.map((URL, index) => (
                  <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="box d-none d-md-block">
            <div className="topBar">
              <div className="container hide_in_bar_cent">
                <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll/>
                <div className="top_function_list">
                  <span className="top_function_hint">Table : 25 </span>
                  <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
                </div> 
              </div>
            </div>
            <div className="carousel_box">
              <Carousel className="carousel_size" useKeyboardArrows={true}
                statusFormatter={change_state}
                renderArrowNext = {arrow_next}
                renderArrowPrev = {arrow_prev}>
                {images_md.map((URL, index) => (
                  <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      );
}

export default Store_Detail

