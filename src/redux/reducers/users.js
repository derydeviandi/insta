const users = {
    email: '',
    username: '',
    // profile_pict: ''
}

function UsersReducer(state = users, action) {
    if (action.type === 'REGISTER_SUCCESS') {
        return action.payload
    } else {
        return state
    }
}

export default UsersReducer;