import styled from 'styled-components';

export const SocialLink = styled.a.attrs({
	target: '_blank',
	rel: 'noopener noreferrer',
})`
	color: rgba(255, 255, 255, 0.6);
	text-decoration: none;
	
	&:hover {
		color: white;
	}
`;
