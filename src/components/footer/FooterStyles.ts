import styled from 'styled-components';
import { Text } from '../typography/Text';

export const Footer = styled.footer`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  position: relative;
  grid-area: footer;
`;

export const FooterText = styled(Text)`
  font-weight: 200;
  font-size: 12px;
  color: white;
  padding-top: 3px;
  margin: 0;
`;

export const SocialLinkContainer = FooterText.extend`
	display: inline;
`;
