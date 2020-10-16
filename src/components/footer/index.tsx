import { Text } from "components/typography/text"
import React, { Fragment } from "react"
import styled from "styled-components"

type Props = {
  children?: never
}

export const Footer: React.FunctionComponent<Props> = () => {
  return (
    <Container>
      <FooterText>
        {`You can find this project on `}
        <Link href={"https://github.com/liborgabrhel/cz-liborgabrhel-birthday"}>{`GitHub`}</Link>
        {`!`}
      </FooterText>
    </Container>
  )
}

/**
 * Styled components
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  grid-area: footer;
`

const FooterText = styled(Text)`
  font-weight: 200;
  font-size: 12px;
  color: #333333;
  padding-top: 3px;
  margin: 0;
`

const Link = styled("a")`
  color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: rgba(51, 51, 51, 1);
  }
`
