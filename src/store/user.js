const initial = {};

const GET_USER = "GET_USER";

const getUser = user => ({
    type: GET_USER,
    user,
})

export const loggin = () => async dispatch => {
    try {
        const {data} = {data: "sample username for test"}
        dispatch(getUser(data))
    } catch (err) {
        console.error(err)
    }
}

export default function(state=initial, action) {
    switch(action.type) {
        case GET_USER:
            return {...state, user: action.user}
        default:
            return state
    }
}