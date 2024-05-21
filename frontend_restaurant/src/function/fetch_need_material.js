let fetch_need_material = () => {
    return (
        [
            {
              name: "原丼力炸雞丼",
              need: [100,0,0,50,30,30],
           },
            {
              name: "香煎嫩雞腿丼",
              need: [100,0,0,70,30,30],
           },
            {
              name: "味噌烤鯖魚飯",
              need: [100,70,0,0,30,30],
           },
            {
              name: "日式炸豬排丼",
              need: [100,0,70,0,30,30],
           },
            {
              name: "骰子牛肉丼",
              need: [100,0,0,0,30,30],
            },
            {
              name: "鹽烤松阪豬丼",
              need: [100,0,50,0,30,30],
           },
          ]
    )


}


export {fetch_need_material as default}
