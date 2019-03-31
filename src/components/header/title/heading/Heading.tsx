import * as React from 'react';
import * as Styles from './HeadingStyles';
import { Heading } from '../../../typography/Heading';

class HeadingComponent extends React.PureComponent {
	render() {
		return (
			<Styles.HeadingContainer>

				<Heading>
					{'Countdown'}
				</Heading>

			</Styles.HeadingContainer>
		);
	}
}

export default HeadingComponent;
