import * as React from 'react';
import * as Styles from './SubheadingStyles';
import { Subheading } from '../../../typography/Subheading';

class SubheadingComponent extends React.PureComponent {
	render() {
		const { children } = this.props;

		return (
			<Styles.SubheadingContainer>

				<Subheading>
					{`to my ${children} birthday`}
				</Subheading>

			</Styles.SubheadingContainer>
		);
	}
}

export default SubheadingComponent;
