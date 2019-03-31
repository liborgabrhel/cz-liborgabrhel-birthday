import styled from 'styled-components';
import { Text } from '../typography/Text';

export const DialogWindow = styled.section`
	display: grid;
	position: fixed;
	grid-template-columns: auto 600px auto;
	grid-template-rows: auto max-content auto;
	grid-template-areas:
		". . ." 
		" . message ."
		". . .";
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.95);
	
	@media screen and (max-width: 679px) {
		grid-template-columns: auto 200px auto;
	}
`;

export const DialogMessage = styled(Text)`
	font-size: 48px;
	font-weight: lighter;
	font-style: italic;
	grid-area: message;
	justify-self: center;
	text-align: left;
	color: whitesmoke;
	cursor: default;
	user-select: none;
	
	@media screen and (max-width: 679px) {
		text-align: center;
		font-size: 42px;
	}
`;

export const CloseButton = styled.div`

`;
