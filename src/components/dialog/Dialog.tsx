import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { closeDialog } from '../../actions';
import { RootState } from '../../reducers';
import CloseButton from './closeButton/CloseButton';
import * as Styles from './DialogStyles';

type Props = {
	currentAge: RootState['celebratedAge']['currentAge'],
	closeDialog: typeof closeDialog,
};

class Dialog extends React.PureComponent<Props> {
	render() {
		const { currentAge } = this.props;

		return (
			<Styles.DialogWindow>
				<CloseButton
					onClick={this.props.closeDialog}
				/>
				<Styles.DialogMessage>
					{`I have just turned ${currentAge}!!!`}
				</Styles.DialogMessage>
			</Styles.DialogWindow>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	currentAge: state.celebratedAge.currentAge,
});

export default compose(
	connect(mapStateToProps, {
		closeDialog,
	}),
)(Dialog);
