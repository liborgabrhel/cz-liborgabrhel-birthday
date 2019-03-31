import * as React from 'react';
import * as Styles from './IconStyles';
import BirthdayIcon from './BirthdayIcon';

type Props = {
	color?: string,
};

class Icon extends React.PureComponent<Props> {
	render() {
		return (
			<Styles.Icon color={this.props.color}>

				<BirthdayIcon color={this.props.color}/>

			</Styles.Icon>
		);
	}
}

export default Icon;
