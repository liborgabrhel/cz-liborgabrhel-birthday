import { Heading } from "components/typography/heading"
import { Subheading } from "components/typography/subheading"
import React from "react"
import { useSelector } from "react-redux"
import { ReduxStore } from "redux-store"
import styled from "styled-components"
import { theme } from "theme"
import { getOrdinalSuffix } from "utils"
import partyingFaceEmoji from "assets/images/partying-face-emoji.png"

type Props = {
  children?: never
}

export const Header = (_props: Props) => {
  const nextCelebratedAge = useSelector((store: ReduxStore) => store.celebratedAge.next)
  const ordinalSuffix = getOrdinalSuffix(nextCelebratedAge)

  return (
    <Container>
      {/* Partying Face Emoji */}
      <EmojiWrapper>
        <Emoji src={partyingFaceEmoji} alt={"partying face"} />
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

/**
 * Styled components
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

  background-color: ${theme.header.backgroundColor[0]};

  @media (prefers-color-scheme: dark) {
    background-color: ${theme.header.backgroundColor[1]};
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

const Emoji = styled("img")`
  width: 100px;
  height: 100px;

  @media screen and (max-width: 470px) {
    width: 80px;
    height: 80px;
  }
`

const EmojiWrapper = styled("div")<{ color?: string }>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  grid-area: emoji;
  width: 100%;
  height: 100%;
`

const HeadingWrapper = styled("div")`
  position: relative;
  grid-area: heading;
  align-self: end;

  @media screen and (max-width: 470px) {
    justify-self: center;
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
