import { getFacebookAuth } from '../../lib/authService'

const initState = {
    token: ''
}
export const TODO_ADD = 'TODO_ADD'

export const fetchFacebookAuth = () =>  getFacebookAuth();


export default (state = initState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
    default:
      return state
  }
}
