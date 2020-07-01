import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      console.log("switch");
      return [...state, { name: action.contact, email: action.email }];
    case actionTypes.REMOVE_CONTACT:
      console.log("io switch", state, action.id);
      return state.filter((data, i) => i !== action.id);

    default:
      return state;
  }
};
