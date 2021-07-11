import { ReactNode } from "react"
import styled from "styled-components"

/**
 * Theme
 */

const theme = {
  fontColor: ["#0a0a0a", "#fafafa"],
}

/**
 * Styles
 */

const Heading = styled("h1")`
  position: relative;
  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin: 0;
  color: ${theme.fontColor[0]};
  grid-area: heading;
  align-self: end;

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

export const HeaderHeading = ({ children }: Props) => {
  return <Heading>{children}</Heading>
}
