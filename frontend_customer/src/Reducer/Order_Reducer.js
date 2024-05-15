const Order_Reducer = (state,action) => {
    // alert(state)
    switch(action.type){
        case "add_at" :
            // alert(state)
            // alert(typeof state)
            var new_state = Array.from(state)
            // alert(new_state)
            new_state[action.place] =  new_state[action.place] + 1
            return new_state
        case "sub_at" :
            return state
        case "update_state":
            return action.new_state
    }
}

export {Order_Reducer as default}