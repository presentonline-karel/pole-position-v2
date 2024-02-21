"use client";

import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyles = styled.createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: #FFFFFF;
		position: relative;
	}
`;

export default GlobalStyles;
