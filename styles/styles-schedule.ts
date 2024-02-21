"use client";

// Styled components
import styled from "styled-components";

export const Title = styled.h1`
  color: red;
`;

export const StyledGrandPrixs = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const StyledGrandPrix = styled.div`
  width: 100%;
  border-radius: 6px;
  border: 0.4px solid #000000;
  padding: 20px 16px;
`;