import styled, { keyframes } from 'styled-components';
import { Text } from '../../../typography/Text';

export const UnitDigitContainer = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	grid-area: digit;
	width: 160px;
	min-height: 120px;
	perspective-origin: 50% 50%;
	perspective: 300px;
	box-shadow: 0px 10px 10px -10px #333333;
	cursor: default;
	user-select: none;
`;

const borderColor = 'whitesmoke';

const CardContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	min-width: 160px;
	height: 60px;
	overflow: hidden;
	background-color: white;
	border: 1px solid ${borderColor};
`;

export const StaticUpperCard = CardContainer.extend`
	align-items: flex-end;
	border-top-left-radius: 3px;
	border-top-right-radius: 3px;
`;

export const StaticLowerCard = CardContainer.extend`
	align-items: flex-start;
	border-bottom-left-radius: 3px;
	border-bottom-right-radius: 3px;
`;

type AnimatedCardProps = {
	reversed: boolean;
};

const getTopOffset = (props: AnimatedCardProps) => props.reversed ? '60px' : '0px';
const getItemsAlignment = (props: AnimatedCardProps) => props.reversed ? 'flex-start' : 'flex-end';
const getTransformOrigin = (props: AnimatedCardProps) => props.reversed ? '50% 0%' : '50% 100%';
const getTransformRotation = (props: AnimatedCardProps) => props.reversed ? '180' : '0';
const getBorderRadiusPosition = (props: AnimatedCardProps) => props.reversed ? 'bottom' : 'top';
const getAnimationName = (props: AnimatedCardProps) => props.reversed ? unfold : fold;

const easing = `cubic-bezier(0.455, 0.03, 0.515, 0.955)`;

export const AnimatedCard = CardContainer.extend`
	position: absolute;
	top: ${getTopOffset};
	left: 0px;
	align-items: ${getItemsAlignment};
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transform-origin: ${getTransformOrigin};
	transform: rotateX(${getTransformRotation}deg);
	border-${getBorderRadiusPosition}-left-radius: 3px;
	border-${getBorderRadiusPosition}-right-radius: 3px;
	animation: ${getAnimationName} 0.9s  ${easing} 0s 1 normal forwards;
`;

const Digit = styled(Text)`
	font-family: 'Droid Sans Mono', monospace;
	font-size: 77px;
	color: #333333;
`;

export const UpperDigit = Digit.extend`
	transform: translateY(50%);
`;

export const LowerDigit = Digit.extend`
	transform: translateY(-50%);
`;

const getDigitPosition = (props: AnimatedCardProps) => props.reversed ? '-50%' : '50%';

export const AnimatedCardDigit = Digit.extend`
	transform: translateY(${getDigitPosition});
`;

const unfold = keyframes`
	0% {
		transform: rotateX(180deg);
	}
	100% {
		transform: rotateX(0deg);
	}
`;

const fold = keyframes`
	0% {
		transform: rotateX(0deg);
	}
	100% {
		transform: rotateX(-180deg);
	}
`;
