import * as actionTypes from "./actionTypes";

export const createContact = (name, email) => {
  return {
    type: "CREATE_NEW_CONTACT",
    contact: name,
    email: email,
  };
};
export const deleteContact = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id,
  };
};
