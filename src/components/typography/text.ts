import styled from "styled-components"
import { theme } from "theme"

export const Text = styled("span")`
  font-family: sans-serif;
  font-size: 16px;
  color: ${theme.text.fontColor[0]};

  @media (prefers-color-scheme: dark) {
    color: ${theme.text.fontColor[1]};
  }
`
