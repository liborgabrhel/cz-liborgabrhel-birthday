import { ReactNode } from "react"
import styled from "styled-components"
import partyingFaceEmoji from "../../public/images/partying-face-emoji.png"
import Image from "next/image"

/**
 * Theme
 */

const theme = {
  backgroundColor: ["#fafafa", "#0a0a0a"],
}

/**
 * Styles
 */

const Container = styled("header")`
  display: grid;
  position: relative;
  justify-items: start;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  grid-column-gap: 20px;
  grid-template-areas:
    "emoji heading"
    "emoji subheading";
  grid-area: header;
  align-content: center;
  justify-content: center;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);
  background-color: ${theme.backgroundColor[0]};
  height: 200px;

  @media (prefers-color-scheme: dark) {
    background-color: ${theme.backgroundColor[1]};
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content max-content max-content;
    grid-column-gap: 0;
    grid-template-areas:
      "emoji"
      "heading"
      "subheading";
  }
`

const EmojiWrapper = styled("div")<{ color?: string }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  grid-area: emoji;
  width: 100px;
  height: 100px;

  @media screen and (max-width: 470px) {
    justify-self: center;
    width: 80px;
    height: 80px;
  }
`

/**
 * Component
 */

type Props = {
  children: ReactNode
}

export const PageHeader = ({ children }: Props) => {
  return (
    <Container>
      <EmojiWrapper>
        <Image src={partyingFaceEmoji} alt={"partying face"} />
      </EmojiWrapper>

      {children}
    </Container>
  )
}
