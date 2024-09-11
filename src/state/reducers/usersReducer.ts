import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

interface UsersState {
  loading: boolean;
  error: string | null;
  data: User[];
}

const initalState = {
  loading: false,
  error: null,
  data: []
}

const usersReducer = (state: UsersState = initalState, action: Action): UsersState => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return { loading: true, error: null, data: [] };
    case ActionType.GET_USERS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.GET_USERS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default usersReducer;