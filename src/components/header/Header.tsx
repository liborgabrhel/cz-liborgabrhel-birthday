import * as React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { RootState } from '../../reducers';
import { getOrdinalEnding } from '../../utils';
import * as Styles from './HeaderStyles';
import Heading from './title/heading/Heading';
import Subheading from './title/subheading/Subheading';
import Icon from './icon/Icon';

type Props = {
	celebratedAge: RootState['celebratedAge']['nextAge'],
};

class Header extends React.PureComponent<Props> {
	render() {
		const { celebratedAge } = this.props;

		return (
			<Styles.Header>

				<Icon />

				<Heading/>

				<Subheading>
					{`${celebratedAge}${getOrdinalEnding(celebratedAge)}`}
				</Subheading>

			</Styles.Header>
		);
	}
}

const mapStateToProps = (state: RootState) => ({
	celebratedAge: state.celebratedAge.nextAge,
});

export default compose(
	connect(mapStateToProps, {}),
)(Header);
