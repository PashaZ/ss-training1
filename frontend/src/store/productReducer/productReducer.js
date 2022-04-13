export function productReducer(state, action) {
  switch (action.type) {
    case "withoutFilter":
      return action.payload;
    case "filter":
      return action.payload;
    default:
      return state;
  }
}
