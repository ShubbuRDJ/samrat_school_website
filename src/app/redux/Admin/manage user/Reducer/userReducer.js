import { ActionType } from "../Action-type/ActionType";

const initialState = {
  isLoading: false,
  msg: "",
  allUser: {}
};

export const getAllUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_USER_PENDING:
      return {
        ...state,
        isLoading: true,
        msg: "",
      };
    case ActionType.GET_USER_SUCCESS:
      return {
        ...state,
        allUser: action.payload,
        isLoading: false,
        msg: action.msg,
      };
    case ActionType.GET_USER_FAILURE:
      return {
        ...state,
        msg: action.msg,
        isLoading: false,
      }

    default:
      return state;
  }
};
