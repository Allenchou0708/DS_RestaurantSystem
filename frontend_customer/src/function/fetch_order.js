
let fetch_order = () => {

    var order_list = [
        {"time":"23:14","price":240,"meals":[1,0,0,5,4,3]},
        {"time":"22:13","price":460,"meals":[1,4,0,5,7,3]},
        {"time":"21:12","price":210,"meals":[1,0,0,2,4,3]},
        {"time":"20:11","price":620,"meals":[1,0,3,5,4,3]},
        {"time":"19:10","price":290,"meals":[1,0,2,5,6,3]}
    ]

    order_list = order_list.sort((a,b)=>{
        b.time - a.time
    })

    // order_list.map((element)=>{
    //     alert(element.time)
    // })
    

    return order_list
}

export {fetch_order as default}