let fetch_total_material = () => {
    return [1200,1600,600,800,1000,1200]
}

let fetch_now_material = () => {
    return [250,900,500,300,700,800]
}

let fetch_now_material_portion = () => {
    var total_material = fetch_total_material()
    var now_material = fetch_now_material()
    var now_material_portion = total_material.map((total,index)=> Math.round(now_material[index] / total * 100) )
    return now_material_portion
}

export {fetch_now_material_portion as default}
export {fetch_now_material, fetch_total_material}
