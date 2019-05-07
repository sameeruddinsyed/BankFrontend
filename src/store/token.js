const initial = {};

const GET_TOKEN = "GET_TOKEN";

const getToken = token => ({
    type: GET_TOKEN,
    token
})

const current = new Date()

export const token = () => async dispatch => {
    try {
        const {data} = {data: {key: "54DF@%j98$", expire: current}}
        dispatch(getToken(data))
    } catch (err) {
        console.error(err)
    }
}

export default function(state=initial, action) {
    switch(action.type) {
        case GET_TOKEN:
            return action.token
        default:
            return state
    }
}