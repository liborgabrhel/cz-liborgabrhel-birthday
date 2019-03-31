import styled from 'styled-components';

export const App = styled.main`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 200px auto 60px;
  grid-template-areas:
    "header"
    "countdown"
    "footer";
  width: 100%;
  height: 100vh;
  min-height: 600px;
`;

export const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: darkslateblue;
	background-image: linear-gradient(19deg, magenta 0%, darkslateblue 49%);
	background-attachment: fixed;
`;
