const Order_Reducer = (state,action) => {
    // alert(state)
    switch(action.type){
        case "add_at" :
            var new_state = state.split(",")
            alert(new_state[3])
            new_state[action.place] =  new_state[action.place] + 1
            return new_state.join(",")
        case "sub_at" :
            return state
        case "update_state":
            return action.new_state
    }
}

export {Order_Reducer as default}