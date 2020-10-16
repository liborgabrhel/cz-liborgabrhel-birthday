import { Heading } from "components/typography/heading"
import { Subheading } from "components/typography/subheading"
import React from "react"
import { useSelector } from "react-redux"
import { ReduxStore } from "redux-store"
import styled from "styled-components"
import { getOrdinalSuffix } from "utils"

type Props = {
  children?: never
}

export const Header: React.FunctionComponent<Props> = () => {
  const nextCelebratedAge = useSelector((store: ReduxStore) => store.celebratedAge.next)
  const ordinalSuffix = getOrdinalSuffix(nextCelebratedAge)

  return (
    <Container>
      {/* Partying Face Emoji */}
      <EmojiWrapper>
        <Emoji>{"🥳"}</Emoji>
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
  background-color: #4158d0;
  background-image: linear-gradient(43deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%);
  box-shadow: 0 0 6px 3px rgba(0, 0, 0, 0.3);

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

const Emoji = styled("span")`
  font-size: 5.5rem;
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
