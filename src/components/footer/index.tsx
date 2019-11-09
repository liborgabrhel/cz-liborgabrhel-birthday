import { SocialSite } from "components/footer/types"
import { Text } from "components/typography/text"
import React, { Fragment } from "react"
import styled from "styled-components"

const SOCIAL_SITES: SocialSite[] = [
  {
    name: "twitter",
    url: "https://twitter.com/libor_g",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/libor.gabrhel",
  },
  {
    name: "codepen",
    url: "https://codepen.io/Libor_G/",
  },
]

type Props = {
  children?: never
}

export const Footer: React.FunctionComponent<Props> = () => {
  return (
    <Container>
      <FooterText>
        {`find me on `}
        {SOCIAL_SITES.map((site: SocialSite, index: number) => {
          const numberOfLinks = SOCIAL_SITES.length
          let conjunction = ""
          if (index < numberOfLinks - 2) {
            conjunction = ", "
          }
          if (index === numberOfLinks - 2) {
            conjunction = " or "
          }
          return (
            <Fragment key={site.name}>
              <SocialLink href={site.url}>{site.name}</SocialLink>
              {conjunction}
            </Fragment>
          )
        })}
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
  color: white;
  padding-top: 3px;
  margin: 0;
`

const SocialLink = styled("a")`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;

  &:hover {
    color: white;
  }
`
