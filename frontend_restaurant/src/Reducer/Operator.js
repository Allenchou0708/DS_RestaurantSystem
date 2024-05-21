let add_at = (place) => {
    // alert("in add_at "+ place)
    return {
    "type" : "add_at",
    "place" : place
}}

let sub_at = (place) => ({
    "type" : "sub_at",
    "place" : place
})

let update_state = (new_state) => ({
    "type" : "update_state",
    "new_state" : new_state
})

let reset_state = () => ({
    "type" : "reset_state",
})

export {add_at,sub_at,update_state,reset_state}