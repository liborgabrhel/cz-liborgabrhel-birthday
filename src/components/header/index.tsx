import { IconBalloons } from "components/icons/icon-balloons"
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
      {/* Icon */}
      <IconWrapper>
        <IconBalloons />
      </IconWrapper>

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
  grid-template-columns: auto 140px max-content auto;
  grid-template-rows: auto 100px 40px auto;
  grid-column-gap: 10px;
  grid-template-areas:
    ". . . ."
    ". icon heading ."
    ". icon subheading ."
    ". . . .";
  grid-area: header;

  @media screen and (max-width: 470px) {
    grid-template-columns: auto max-content 100px max-content auto;
    grid-template-rows: auto 100px 60px 40px auto;
    grid-column-gap: 0;
    grid-template-areas:
      ". . . . ."
      ". . icon . ."
      ". heading heading heading ."
      ". subheading subheading subheading ."
      ". . . . .";
  }
`

const IconWrapper = styled("div")<{ color?: string }>`
  grid-area: icon;
  border-bottom: 1px solid ${props => props.color ?? "whitesmoke"};
  width: 100%;
  height: 100%;
`

const HeadingWrapper = styled("div")`
  position: relative;
  grid-area: heading;
  align-self: end;
`

const SubheadingWrapper = styled("div")`
  position: relative;
  grid-area: subheading;
  align-self: start;
`
