import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const getUsers = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_USERS
    });

    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      dispatch({
        type: ActionType.GET_USERS_SUCCESS,
        payload: data
      })
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_USERS_ERROR,
        payload: err.message
      })
    }
  };
};

export const searchUsers = (payload: { filter: string; value: string }) => {
  return {
    type: ActionType.SEARCH_USERS,
    payload,
  };
};