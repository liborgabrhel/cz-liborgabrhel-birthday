import { ReactNode } from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("div")`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content 1fr max-content;
  grid-template-areas:
    "header"
    "content"
    "footer";
  width: 100%;
  min-height: 100vh;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const PageBody = ({ children }: Props) => <Container>{children}</Container>
