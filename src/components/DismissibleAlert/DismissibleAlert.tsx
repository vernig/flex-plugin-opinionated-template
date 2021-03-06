import React from 'react';

import { DismissibleAlertStyles } from './DismissibleAlert.Styles';
import { StateToProps, DispatchToProps } from './DismissibleAlert.Container';

// Remove the following line once you add items to OwnProps
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface OwnProps {
  // Props passed directly to the component
}

// Props should be a combination of StateToProps, DispatchToProps, and OwnProps
type Props = StateToProps & DispatchToProps & OwnProps;

// It is recommended to keep components stateless and use redux for managing states
const CustomDismissibleComponent = (props: Props): JSX.Element | null => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <DismissibleAlertStyles>
      This is a dismissible demo component
      <i className="accented" onClick={props.dismissBar} role="button" tabIndex={0}>
        close
      </i>
    </DismissibleAlertStyles>
  );
};

export default CustomDismissibleComponent;
