import { Action } from '.';

const ACTION_DISMISS_BAR = 'DISMISS_BAR';

export interface DismissibleAlertState {
  isOpen: boolean;
}

const initialState: DismissibleAlertState = {
  isOpen: true,
};

export class Actions {
  public static dismissBar = (): Action => ({ type: ACTION_DISMISS_BAR });
}

export function reduce(state: DismissibleAlertState = initialState, action: Action): DismissibleAlertState {
  // Remove the following comment once more Actions are added
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case ACTION_DISMISS_BAR: {
      return {
        ...state,
        isOpen: false,
      };
    }

    default:
      return state;
  }
}
