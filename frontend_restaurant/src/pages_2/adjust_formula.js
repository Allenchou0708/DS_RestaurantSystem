import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "../style/OrderPage.css"
import debug from "../style/debug.module.css"

import { Button, Modal, Row, Col, Form } from "react-bootstrap";
import styles from "../style/adjust_formula.module.css";
import fetch_material_name from "../function/fetch_material_name";
import fetch_need_material from "../function/fetch_need_material";


class Material{
    constructor(name,total_num,now_num){
        this.name= name;
        this.total_num = total_num;
        this.now_num = now_num;
    }
}

const Adjust_Material = () => {

    const navigate = useNavigate()

    
    let material_name = fetch_material_name()
    let original_need_material = fetch_need_material()

    let [need_material,revise_need_material] = useState(original_need_material)

    let [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (meal_name,need_list) => {
      revise_meal_name(meal_name)
      revise_material_list(need_list)
      setShow(true);
    }

    let [meal_name, revise_meal_name] = useState(" ");
    let [material_list, revise_material_list] = useState([]);


    let change_material_name = (input,index) => {
        let new_need_material = Array.from(need_material)
        new_need_material[index].name = input
        revise_need_material(new_need_material)
    }

    let click_delete = (index) =>{
      let new_need_material = Array.from(need_material)
      new_need_material.splice(index,1)
      revise_need_material(new_need_material)
    }


    let click_add = () => {
        let new_need_material = Array.from(need_material)
        let new_num_array = Array.from(material_name).fill(0)
        let new_material = {"name":" ","need":new_num_array}
        new_need_material.push(new_material)
        revise_need_material(new_need_material)
    }

    let change_need_material = (meal_name,material_index,new_num) => {
        let new_material_list = Array.from(material_list)

        new_material_list[material_index] = new_num
        
        revise_material_list(new_material_list)
    }

    let save_need_material = () => {
      let new_need_material = Array.from(need_material)
      new_need_material.forEach((need,index)=>{
        if(need.name === meal_name){
            new_need_material[index].need = material_list
        }
      })
      revise_need_material(new_need_material)
      setShow(false)
    }

    return (
      <div className="scarfold">
        <div className="topBar mb-5">
          <div className="container hide_in_bar_cent">
            <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll alt="yuandonli"/>

            <div className="top_function_list">
                <Button className="px-3 py-2 me-2" variant="success" onClick={()=>{alert("存原料變動，檢查total>now")}}> Save</Button>
                <span class="material-symbols-outlined top_function_hint top_icon" onClick={()=>{alert("檢查total>now");navigate("/order")}}>bar_chart_4_bars</span>
            </div> 
          </div>
        </div>
        <div className="container">
            <Form>
                {
                    need_material.map((meal,index)=>{
                        return(
                            <Row className="d-flex align-items-center mb-3" key={index}>
                                <Col className="d-flex justify-content-center" xs={1}>
                                    <div className={[styles.order_number].join(" ")}>{index}</div>
                                </Col>

                                <Col className="d-flex">
                                    <Form.Label className={["me-3",styles.fix_legend_margin,"w-25"].join(" ")} column lg={2}>餐點名稱</Form.Label>
                                    <Form.Control value={meal.name} onChange={(e)=>{let input = e.target.value;change_material_name(input,index)}} className=" w-75" placeholder="First name" />
                                    <Form.Label className="ms-2" column lg={2}> </Form.Label>
                                </Col>
                                <Col className="d-flex justify-content-center" xs={2}>
                                    <Button className="me-3" variant="secondary" onClick={()=>{handleShow(meal.name,meal.need)}}>修改預估公式</Button>
                                    <Button variant="danger" onClick={()=>{click_delete(index)}}>刪除</Button>
                                </Col>

                            </Row>
                        )
                    })

                }
                
            </Form>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{meal_name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  { 
                    material_list.map((need_material,index)=>{
                      return(
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" key={"material_"+index}>
                          <Form.Label>{material_name[index]}</Form.Label>
                          <Form.Control
                            value={need_material}
                            onChange={(e)=>{let new_num = e.target.value;change_need_material(meal_name,index,new_num)}}
                          />
                        </Form.Group>
                      )
                    })
                  }
                  
                  
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={save_need_material}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
            <div className="d-flex justify-content-center mt-4">
                <Button variant="info" className=" text-white mb-5 " onClick={click_add}>加入原料</Button>{' '}
            </div>
        </div>
        <div className="footer">
                 
        </div>
      </div> 
    ) 
}

export default Adjust_Material

