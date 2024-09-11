import { ActionType } from "../action-types";
import { User } from '../reducers/usersReducer'

interface GetUsersAction {
  type: ActionType.GET_USERS;
}

interface GetUsersSuccessAction {
  type: ActionType.GET_USERS_SUCCESS;
  payload: User[];
}

interface GetUsersErrorAction {
  type: ActionType.GET_USERS_ERROR;
  payload: string;
}

export type Action = GetUsersAction | GetUsersSuccessAction | GetUsersErrorAction