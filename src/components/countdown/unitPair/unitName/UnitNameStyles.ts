import styled from 'styled-components';
import { Text } from '../../../typography/Text';

export const UnitNameContainer = styled.section`
	grid-area: name;
`;

export const UnitName = styled(Text)`
	font-weight: 400;
	color: white;
	padding-top: 0.3rem;
`;
