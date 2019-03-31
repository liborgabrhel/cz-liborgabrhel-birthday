import styled from 'styled-components';

export const CountdownContainer = styled.section`
	display: grid;
	position: relative;
	grid-template-columns: auto 160px 160px 160px 160px auto;
	grid-template-rows: auto 180px auto;
	grid-column-gap: 50px;
	grid-template-areas:
		". . . . . ."
		". days hours minutes seconds ."
		". . . . . .";
	grid-area: countdown;
	
	@media screen and (max-width: 890px) {
		grid-template-columns: auto 160px 160px auto;
		grid-template-rows: auto 180px 180px auto;
		grid-row-gap: 50px;
		grid-template-areas:
			". . . ."
			". days hours ."
			". minutes seconds ."
			". . . .";
	}
	
	@media screen and (max-width: 470px) {
		grid-template-columns: auto 160px auto;
		grid-template-rows: auto 180px 180px 180px 180px auto;
		grid-template-areas:
			". . ."
			". days ."
			". hours ."
			". minutes ."
			". seconds ."
			". . .";
	}
`;

export const UnitNamesContainer = styled.section``;
