import * as React from 'react';
import * as Styles from './CloseButtonStyles';
import CloseIcon from './CloseIcon';

type Props = {
	onClick: () => void;
};

class CloseButton extends React.PureComponent<Props> {

	handleClick = () => {
		this.props.onClick();
	}

	render() {
		return (
			<Styles.Button
				onClick={this.handleClick}
				title={'Close the notice'}
			>
				<CloseIcon color={'whitesmoke'}/>
			</Styles.Button>
		);
	}
}

export default CloseButton;
