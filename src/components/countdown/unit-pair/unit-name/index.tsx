import { Text } from "components/typography/text"
import React from "react"
import styled from "styled-components"

type Props = {
  children: string
}

export const UnitName: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <Name>{children}</Name>
    </Container>
  )
}

/**
 * Styled components
 */

const Container = styled.section`
  grid-area: name;
`

const Name = styled(Text)`
  font-weight: 400;
  color: white;
  padding-top: 0.3rem;
`
