import styled from "styled-components"
import packageData from "../../package.json"

/**
 * Theme
 */

const theme = {
  text: {
    fontColor: ["#0a0a0a", "#fafafa"],
  },
  link: {
    fontColor: ["#4158d0", "#7c8dde"],
    hoverFontColor: ["#c850c0", "#d373cd"],
    activeFontColor: ["#ffcc70", "#ffdb99"],
  },
  footer: {
    backgroundColor: ["#fafafa", "#0a0a0a"],
  },
}

/**
 * Styles
 */

const Container = styled("footer")`
  display: flex;
  position: relative;
  height: 60px;
  justify-content: center;
  align-items: center;
  grid-area: footer;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);
  background-color: ${theme.footer.backgroundColor[0]};

  @media (prefers-color-scheme: dark) {
    background-color: ${theme.footer.backgroundColor[1]};
  }
`

export const Text = styled("span")``

const FooterText = styled(Text)`
  font-family: sans-serif;
  font-weight: 200;
  font-size: 12px;
  padding-top: 3px;
  margin: 0;
  color: ${theme.text.fontColor[0]};

  @media (prefers-color-scheme: dark) {
    color: ${theme.text.fontColor[1]};
  }
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

/**
 * Component
 */

type Props = {
  children?: never
}

export const PageFooter = (_props: Props) => {
  const githubUrl = packageData.repository.url

  return (
    <Container>
      <FooterText>
        {`You can find this project on `}
        <Link href={githubUrl}>{`GitHub`}</Link>
        {`.`}
      </FooterText>
    </Container>
  )
}
