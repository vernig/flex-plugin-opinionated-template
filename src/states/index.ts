import { AppState as FlexAppState } from '@twilio/flex-ui';
import { combineReducers, Action as ReduxAction } from 'redux';

import { DismissibleAlertState, reduce as DismissibleAlertReducer } from './DismissibleAlertState';

// Register your redux store under a unique namespace
export const namespace = 'mytemplate';

// Extend this payload to be of type that your ReduxAction is
export interface Action extends ReduxAction {
  payload?: any;
}

// Register all component states under the namespace
export interface AppState {
  flex: FlexAppState;
  mytemplate: {
    dismissibleAlert: DismissibleAlertState;
    // Other states
  };
}

// Combine the reducers
export default combineReducers({
  dismissibleAlert: DismissibleAlertReducer,
});
