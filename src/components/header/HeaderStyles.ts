import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  position: relative;
  justify-items: start;
  grid-template-columns: auto 140px max-content auto;
  grid-template-rows: auto 100px 40px auto;
  grid-column-gap: 10px;
  grid-template-areas:
    ". . . ."
    ". icon heading ."
    ". icon subheading ."
    ". . . .";
  grid-area: header;
  
  @media screen and (max-width: 470px) {
  	grid-template-columns: auto max-content 100px max-content auto;
		grid-template-rows: auto 100px 60px 40px auto;
		grid-column-gap: none;
		grid-template-areas:
			". . . . ."
			". . icon . ."
			". heading heading heading ."
			". subheading subheading subheading ."
			". . . . .";
  }
`;
