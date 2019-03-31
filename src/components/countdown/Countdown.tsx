import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../reducers';
import * as Styles from './CountdownStyles';
import UnitPair from './unitPair/UnitPair';

type Props = {
	unitDigits: RootState['unitDigits'],
	unitNames: RootState['unitNames'],
};

class Countdown extends React.PureComponent<Props> {
	render() {
		const { unitDigits, unitNames } = this.props;

		return (
			<Styles.CountdownContainer>

				<UnitPair
					unitDigit={unitDigits.days}
					unitName={unitNames.days}
					gridArea={'days'}
				/>

				<UnitPair
					unitDigit={unitDigits.hours}
					unitName={unitNames.hours}
					gridArea={'hours'}
				/>

				<UnitPair
					unitDigit={unitDigits.minutes}
					unitName={unitNames.minutes}
					gridArea={'minutes'}
				/>

				<UnitPair
					unitDigit={unitDigits.seconds}
					unitName={unitNames.seconds}
					gridArea={'seconds'}
				/>

			</Styles.CountdownContainer>
		);
	}
}

const mapStateToProps = (state: RootState) => {
	return {
		unitDigits: state.unitDigits,
		unitNames: state.unitNames,
	};
};

export default compose(
	connect(mapStateToProps, {}),
)(Countdown);
