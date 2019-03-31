import styled from 'styled-components';

const getColor = (props: {color: string | undefined}) => props.color ? props.color : 'whitesmoke';

export const Icon = styled.div`
	grid-area: icon;
	border-bottom: 1px solid ${getColor};
	width: 100%;
	height: 100%;
`;
