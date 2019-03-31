import * as React from 'react';
import * as Styles from './UnitDigitStyles';

type Props = {
};

type State = {
	prevChildren: number,
	shuffle: boolean,
};

class UnitDigit extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			prevChildren: 0,
			shuffle: true,
		};
	}

	componentWillReceiveProps(nextProps: {children: number}) {
		if (nextProps.children !== this.props.children) {
			this.setState((prevState: State) => ({
				prevChildren: this.props.children,
				shuffle: !prevState.shuffle,
			}));
		}
	}
	
	render() {
		const { children } = this.props;
		const { prevChildren, shuffle } = this.state;

		const digit1 = shuffle ? prevChildren : children;
		const digit2 = shuffle ? children : prevChildren;

		return (
			<Styles.UnitDigitContainer>

				<Styles.StaticUpperCard>
					<Styles.UpperDigit>
						{children}
					</Styles.UpperDigit>
				</Styles.StaticUpperCard>

				<Styles.StaticLowerCard>
					<Styles.LowerDigit>
						{prevChildren}
					</Styles.LowerDigit>
				</Styles.StaticLowerCard>

				<Styles.AnimatedCard reversed={!shuffle}>
					<Styles.AnimatedCardDigit reversed={!shuffle}>
						{digit1}
					</Styles.AnimatedCardDigit>
				</Styles.AnimatedCard>

				<Styles.AnimatedCard reversed={shuffle}>
					<Styles.AnimatedCardDigit reversed={shuffle}>
						{digit2}
					</Styles.AnimatedCardDigit>
				</Styles.AnimatedCard>

			</Styles.UnitDigitContainer>
		);
	}
}

export default UnitDigit;
