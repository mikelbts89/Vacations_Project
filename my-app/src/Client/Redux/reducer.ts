import { ActionType } from "./action_type";
import { AppState } from "./app_state";
import { Action } from "./actions";

export function reduce(
  oldAppState: AppState = {
    vacantionState: [],
    filteredVacations: [],
    currentUserName: "",
    currentAdminStatus: "",
  },
  action: Action
): AppState {
  const newAppState = { ...oldAppState };

  switch (action.type) {
    case ActionType.SetState:
      newAppState.vacantionState = action.payload.vacationsFromApi;
      break;
    case ActionType.SetFilteredState:
      newAppState.filteredVacations = action.payload.filteredVacations;
      break;
    case ActionType.SetCurrentUserName:
      newAppState.currentUserName = action.payload.currentUserName;
      break;
    case ActionType.userRole:
      newAppState.currentAdminStatus = action.payload.userRole;
  }

  return newAppState;
}
