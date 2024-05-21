import {React,useState} from "react";
import { useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "../style/OrderPage.css"
import debug from "../style/debug.module.css"

import { Button, ProgressBar, Row, Col, Form } from "react-bootstrap";
import styles from "../style/adjust_material.module.css";
import fetch_material_name from "../function/fetch_material_name";
import { fetch_total_material } from "../function/fetch_total_material";
import { fetch_now_material } from "../function/fetch_total_material";

class Material{
    constructor(name,total_num,now_num){
        this.name= name;
        this.total_num = total_num;
        this.now_num = now_num;
    }
}

const Adjust_Material = () => {

    const navigate = useNavigate()

    
    let original_material_name = fetch_material_name()
    let original_total_material = fetch_total_material()
    let original_now_material = fetch_now_material()

    let original_material_list = []
    original_material_name.forEach((material_name,index)=>{
        let material = new Material(material_name,original_total_material[index],original_now_material[index])
        original_material_list.push(material)
    })

    let [material_list,revise_material_list] = useState(original_material_list)

    let click_delete = (index) =>{
        let new_material_list = Array.from(material_list)
        new_material_list.splice(index,1)
        revise_material_list(new_material_list)
    }

    let change_material_name = (input,index) => {
        let new_material_list = Array.from(material_list)
        new_material_list[index].name = input
        revise_material_list(new_material_list)
    }


    let change_total_num = (input,index) => {
        let new_material_list = Array.from(material_list)
        new_material_list[index].total_num = input
        revise_material_list(new_material_list)
    }
    

    let change_now_num = (input,index) => {
        let new_material_list = Array.from(material_list)
        new_material_list[index].now_num = input
        revise_material_list(new_material_list)
    }

    let click_add = () => {
        let new_material_list = Array.from(material_list)
        let new_material = new Material(" ",0,0)
        new_material_list.push(new_material)
        revise_material_list(new_material_list)
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
                    material_list.map((material,index)=>{
                        return(
                            <Row className="d-flex align-items-center mb-3" key={index}>
                                <Col className="d-flex justify-content-center" xs={1}>
                                    <div className={[styles.order_number].join(" ")}>{index}</div>
                                </Col>

                                <Col className="d-flex">
                                    <Form.Label className={["me-3",styles.fix_legend_margin,"w-25"].join(" ")} column lg={2}>原料名稱</Form.Label>
                                    <Form.Control value={material.name} onChange={(e)=>{let input = e.target.value;change_material_name(input,index)}} className=" w-75" placeholder="First name" />
                                    <Form.Label className="ms-2" column lg={2}> </Form.Label>
                                </Col>
                                <Col className="d-flex">
                                    <Form.Label className={["me-3",styles.fix_legend_margin,"w-25"].join(" ")} column lg={2}>總量</Form.Label>
                                    <Form.Control value={material.total_num} onChange={(e)=>{let input = e.target.value;change_total_num(input,index)}} className=" w-75" placeholder="First name" />
                                    <Form.Label className="ms-2" column lg={2}>g</Form.Label>
                                </Col>
                                <Col className="d-flex">
                                    <Form.Label className={["me-3",styles.fix_legend_margin," w-25"].join(" ")} column lg={2}>當前數量</Form.Label>
                                    <Form.Control value={material.now_num} onChange={(e)=>{let input = e.target.value;change_now_num(input,index)}} className=" w-75" placeholder="First name" />
                                    <Form.Label className="ms-2" column lg={2}>g</Form.Label>
                                </Col>
                                <Col className="d-flex justify-content-center" xs={2}>
                                    <Button variant="danger" onClick={()=>{click_delete(index)}}>刪除</Button>
                                </Col>

                            </Row>
                        )
                    })

                }
                
            </Form>
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

