import { ActionType } from "./action_type";

export interface Action {
  type: ActionType;
  payload?: any;
}
