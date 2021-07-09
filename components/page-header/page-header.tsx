import styled from "styled-components"
import { getOrdinalSuffix } from "utils";
import partyingFaceEmoji from "../../public/images/partying-face-emoji.png"
import Image from "next/image"

/**
 * Theme
 */

const theme = {
  backgroundColor: ["#fafafa", "#0a0a0a"],
  heading: {
    fontColor: ["#0a0a0a", "#fafafa"],
  },
  subheading: {
    fontColor: ["rgba(10,10,10, 0.6)", "rgba(250,250,250, 0.6)"],
  },
}

/**
 * Styles
 */

const Container = styled("header")`
  display: grid;
  position: relative;
  justify-items: start;
  grid-template-columns: auto max-content max-content auto;
  grid-template-rows: auto max-content max-content auto;
  grid-column-gap: 20px;
  grid-template-areas:
    ". . . ."
    ". emoji heading ."
    ". emoji subheading ."
    ". . . .";
  grid-area: header;
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);
  background-color: ${theme.backgroundColor[0]};
  height: 200px;

  @media (prefers-color-scheme: dark) {
    background-color: ${theme.backgroundColor[1]};
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto max-content max-content max-content auto;
    grid-column-gap: 0;
    grid-template-areas:
      ". . ."
      ". emoji ."
      ". heading ."
      ". subheading ."
      ". . .";
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
    width: 80px;
    height: 80px;
  }
`

const HeadingWrapper = styled("div")`
  position: relative;
  grid-area: heading;
  align-self: end;

  @media screen and (max-width: 470px) {
    justify-self: center;
  }
`

const Heading = styled("h1")`
  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  margin: 0;
  color: ${theme.heading.fontColor[0]};

  @media (prefers-color-scheme: dark) {
    color: ${theme.heading.fontColor[1]};
  }
`

const SubheadingWrapper = styled("div")`
  position: relative;
  grid-area: subheading;
  align-self: start;
  @media screen and (max-width: 470px) {
    justify-self: center;
  }
`

const Subheading = styled("h2")`
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 200;
  margin: 0;
  padding-left: 0.15rem;
  color: ${theme.subheading.fontColor[0]};

  @media (prefers-color-scheme: dark) {
    color: ${theme.subheading.fontColor[1]};
  }
`

/**
 * Component
 */

type Props = {
  nextCelebratedAge: number
}

export const PageHeader = ({ nextCelebratedAge }: Props) => {
  const ordinalSuffix = getOrdinalSuffix(nextCelebratedAge)

  return (
    <Container>
      {/* Partying Face Emoji */}
      <EmojiWrapper>
        <Image src={partyingFaceEmoji} alt={"partying face"} />
      </EmojiWrapper>

      {/* Heading */}
      <HeadingWrapper>
        <Heading>{"Countdown"}</Heading>
      </HeadingWrapper>

      {/* Subheading */}
      <SubheadingWrapper>
        <Subheading>{`to my ${nextCelebratedAge}${ordinalSuffix} birthday`}</Subheading>
      </SubheadingWrapper>
    </Container>
  )
}
