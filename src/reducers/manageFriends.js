export function manageFriends(state = { friends: [] }, action) {
    switch (action.type) {
        case "ADD_FRIEND":
            state.friends.push(action.friend)
            return {
                friends: state.friends
            }
        case "REMOVE_FRIEND":
            const removeFriend = state.friends.filter(function(value, index, arr) {
                return value.id !== action.id
            }) 
            return {
                friends: removeFriend
            }
        default:
            return state
    }
}
