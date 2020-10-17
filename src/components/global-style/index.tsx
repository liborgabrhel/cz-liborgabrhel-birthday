import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Droid+Sans+Mono');

	* {
    box-sizing: border-box;
	}

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
    background-attachment: fixed;
  }
`
