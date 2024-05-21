import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import "../style/OrderPage.css"
import debug from "../style/debug.module.css"

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import styles from "../style/analyze.module.css"

import { Chart } from 'react-google-charts';

import { Button, ProgressBar, NavDropdown, Badge } from "react-bootstrap";
import fetch_raw_data from "../function/fetch_raw_data";
import fetch_chart_type from "../function/fetch_chart_type";

const Analyze = () => {

    const navigate = useNavigate()

    const analyze_ways = [
      "餐點分布","等待時間","訂單數量","收益"
    ];

    const analyze_time = [
      ["今天","本週","本月","本季","本年"],
      ["每小時","每週","每月","每季","每年"],
      ["每小時","每週","每月","每季","每年"],
      ["每小時","每週","每月","每季","每年"]
    ]

    let chart_type_list = fetch_chart_type()

    

    
    //defaultOption 要 useState
    let [selected_way_index,change_select_way_index] = useState(0)
    let [selected_time_index,change_select_time_index] = useState(0)

    let original_raw_data = fetch_raw_data(analyze_ways[selected_way_index],analyze_time[selected_way_index][selected_time_index])
    let [raw_data,set_raw_data] = useState(original_raw_data)

    

    let change_analyze_way = (selected) => {
      let  ways_index = analyze_ways.indexOf(selected)
      change_select_way_index(ways_index)
      change_select_time_index(0)
      let new_data = fetch_raw_data(analyze_ways[selected_way_index],analyze_time[selected_way_index][selected_time_index])
      set_raw_data(new_data)
    }

    let change_analyze_time = (selected) => {
      let time_index = analyze_time[selected_way_index].indexOf(selected)
      change_select_time_index(time_index)
      let new_data = fetch_raw_data(analyze_ways[selected_way_index],analyze_time[selected_way_index][selected_time_index])
      set_raw_data(new_data)
    }

  
    return (
      <div className="scarfold">
        <div className="topBar mb-5">
          <div className="container hide_in_bar_cent">
            <img className="yuandonliIcon" src="/yuandonli@2x.png" data-animate-on-scroll alt="yuandonli"/>

            <div className="top_function_list">
              <span className="top_function_hint">Table : 25 </span>
              <span className="material-symbols-outlined top_function_hint top_icon" onClick={()=>{navigate("/")}}>home</span>
            </div> 
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <div className="mt-5">
                {
                  <Chart chartType={chart_type_list[selected_way_index]} data={raw_data} height={"30vw"} width={"60vw"} />
                }
              </div>
            </div>
            <div className="col-2 d-flex flex-column">
            
              <div className="d-flex flex-column mt-5 mb-5">
                <Badge bg="dark" className={["rounded-0 py-2",styles.dropdown_label].join(" ")} >分析方式</Badge>
                <Dropdown onChange={(e)=>{let selected=e.value;change_analyze_way(selected)}} options={analyze_ways} value={analyze_ways[selected_way_index]} placeholder="Select an option" />
              </div>

              <div className="d-flex flex-column mb-5">
                <Badge bg="dark" className={["rounded-0 py-2",styles.dropdown_label].join(" ")} >分析時間</Badge>
                <Dropdown onChange={(e)=>{let selected=e.value;change_analyze_time(selected)}} options={analyze_time[selected_way_index]} value={analyze_time[selected_way_index][selected_time_index]} placeholder="Select an option" />
              </div>
              
              
            </div>
          </div>
        </div>
      </div> 
    ) 
}

export default Analyze

