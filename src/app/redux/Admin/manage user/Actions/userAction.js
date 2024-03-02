import { ActionType } from "../Action-type/ActionType";



export const getAllUser = (payload, callback) => {
    return async (dispatch) => {
      try {
        dispatch({
          type: ActionType.GET_USER_PENDING,
          isLoading: true,
        });


        

        dispatch({
          type: ActionType.GET_USER_SUCCESS,
          payload: payload,
          isLoading: false,
          msg: '',
        });
      } catch (error) {
        dispatch({
          type: ActionType.GET_USER_FAILURE,
          payload: [],
          isLoading: false,
          msg: '',
        });
      }
    };
  };
