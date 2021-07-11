import { ReactNode } from "react"
import styled from "styled-components"

/**
 * Theme
 */

const theme = {
  fontColor: ["rgba(10,10,10, 0.6)", "rgba(250,250,250, 0.6)"],
}

/**
 * Styles
 */

const Subheading = styled("h2")`
  position: relative;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  padding-left: 0.15rem;
  color: ${theme.fontColor[0]};
  grid-area: subheading;
  align-self: start;

  @media screen and (max-width: 470px) {
    justify-self: center;
  }

  @media (prefers-color-scheme: dark) {
    color: ${theme.fontColor[1]};
  }
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const HeaderSubheading = ({ children }: Props) => {
  return <Subheading>{children}</Subheading>
}
