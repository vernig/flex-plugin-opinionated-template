import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { AppState } from '../../states';
import { Actions } from '../../states/DismissibleAlertState';
import DismissibleAlert from './DismissibleAlert';

export interface StateToProps {
  isOpen: boolean;
}

export interface DispatchToProps {
  dismissBar: () => void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
  isOpen: state.mytemplate.dismissibleAlert.isOpen,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DismissibleAlert);
