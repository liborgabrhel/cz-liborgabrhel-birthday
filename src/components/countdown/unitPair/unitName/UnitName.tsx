import * as React from 'react';
import * as Styles from './UnitNameStyles';

type Props = {
};

class UnitName extends React.PureComponent<Props> {
	render() {
		const { children } = this.props;

		return (
			<Styles.UnitNameContainer>

				<Styles.UnitName>
					{children}
				</Styles.UnitName>

			</Styles.UnitNameContainer>
		);
	}
}

export default UnitName;
