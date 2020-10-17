import styled from "styled-components"
import { theme } from "theme"

export const Subheading = styled("h2")`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  padding-left: 0.15rem;
  color: ${theme.subheading.fontColor[0]};

  @media (prefers-color-scheme: dark) {
    color: ${theme.subheading.fontColor[1]};
  }
`
