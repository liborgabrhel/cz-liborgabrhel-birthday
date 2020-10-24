import { Text } from "components/typography/text"
import React from "react"
import styled from "styled-components"
import { theme } from "theme"

type Props = {
  children?: never
}

export const Footer = (_props: Props) => {
  return (
    <Container>
      <FooterText>
        {`You can find this project on `}
        <Link href={"https://github.com/liborgabrhel/cz-liborgabrhel-birthday"}>{`GitHub`}</Link>
        {`.`}
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
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);
  background-color: ${theme.footer.backgroundColor[0]};

  @media (prefers-color-scheme: dark) {
    background-color: ${theme.footer.backgroundColor[1]};
  }
`

const FooterText = styled(Text)`
  font-weight: 200;
  font-size: 12px;
  padding-top: 3px;
  margin: 0;
`

const Link = styled("a")`
  color: ${theme.link.fontColor[0]};

  &:hover {
    color: ${theme.link.hoverFontColor[0]};
  }

  &:active {
    color: ${theme.link.activeFontColor[0]};
  }

  @media (prefers-color-scheme: dark) {
    color: ${theme.link.fontColor[1]};

    &:hover {
      color: ${theme.link.hoverFontColor[1]};
    }

    &:active {
      color: ${theme.link.activeFontColor[1]};
    }
  }
`
