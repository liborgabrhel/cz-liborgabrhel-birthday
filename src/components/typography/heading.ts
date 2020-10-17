import styled from "styled-components"
import { theme } from "theme"

export const Heading = styled("h1")`
  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin: 0;
  color: ${theme.heading.fontColor[0]};

  @media (prefers-color-scheme: dark) {
    color: ${theme.heading.fontColor[1]};
  }
`
