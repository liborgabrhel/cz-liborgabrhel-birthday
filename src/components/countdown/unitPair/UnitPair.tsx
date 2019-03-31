import * as React from 'react';
import * as Styles from './UnitPairStyles';
import UnitDigit from './unitDigit/UnitDigit';
import UnitName from './unitName/UnitName';

type Props = {
	unitDigit: number,
	unitName: string,
	gridArea: string,
};

class UnitPair extends React.PureComponent<Props> {
	render() {
		const { unitName, unitDigit, gridArea } = this.props;

		return (
			<Styles.UnitPairContainer gridArea={gridArea}>
				<UnitDigit>
					{unitDigit}
				</UnitDigit>
				<UnitName>
					{unitName}
				</UnitName>
			</Styles.UnitPairContainer>
		);
	}
}

export default UnitPair;
