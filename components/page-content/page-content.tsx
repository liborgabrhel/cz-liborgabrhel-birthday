import { ReactNode } from "react"
import styled from "styled-components"

/**
 * Styles
 */

const Container = styled("main")`
  display: flex;
  position: relative;
  flex-direction: column;
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const PageContent = ({ children }: Props) => {
  return <Container>{children}</Container>
}
