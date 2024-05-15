const Order_Reducer = (state,action) => {
    // alert(state)
    switch(action.type){
        case "add_at" :
            var new_state = Array.from(state)
            new_state[action.place] =  new_state[action.place] + 1
            return new_state
        case "sub_at" :
            if(state[action.place] > 0){
                var new_state = Array.from(state)
                new_state[action.place] =  new_state[action.place] - 1
                return new_state
            }
            return state
        case "update_state":
            return action.new_state
    }
}

export {Order_Reducer as default}