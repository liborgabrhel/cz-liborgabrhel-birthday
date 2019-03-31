import styled from 'styled-components';

const getGridArea = (props: {gridArea: string}) => props.gridArea;

export const UnitPairContainer = styled.section`
	display: grid;
	position: relative;
	justify-items: center;
	align-items: center;
	grid-template-columns: 160px;
	grid-template-rows: 140px 40px;
	grid-template-areas:
		"digit"
		"name";
	grid-area: ${getGridArea};
`;
