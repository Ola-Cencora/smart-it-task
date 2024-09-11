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
  filters: {
    searchName: string;
    searchUsername: string;
    searchEmail: string;
    searchPhone: string;
  };
}

const initalState = {
  loading: false,
  error: null,
  data: [],
  filters: {
    searchName: '',
    searchUsername: '',
    searchEmail: '',
    searchPhone: '',
  },
}

const usersReducer = (state: UsersState = initalState, action: Action): UsersState => {
  switch (action.type) {
    case ActionType.GET_USERS:
      return { ...state, loading: true, error: null, data: [] };
    case ActionType.GET_USERS_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case ActionType.GET_USERS_ERROR:
      return { ...state, loading: false, error: action.payload, data: [] };
    case ActionType.SEARCH_USERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filter]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default usersReducer;