export const initialState = {
  users: [],
  isLogged: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        users: [...state.users, action.user],
        isLogged: action.log,
      };
      break;
    case "CLICK_TO_LOG":
      return { ...state, isLogged: action.log };
      break;
    case "REMOVE_FROM_BASKET":
      return { state };
      break;
    default:
      return state;
  }
}
export default reducer;
