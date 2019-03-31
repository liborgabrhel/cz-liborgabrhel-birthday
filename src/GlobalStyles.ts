import { injectGlobal } from 'styled-components';

export default injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=Droid+Sans+Mono');

	* {
    box-sizing: border-box;
	}

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`;
