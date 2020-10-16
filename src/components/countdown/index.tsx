import moment from "moment"
import React, { useEffect } from "react"
import { shallowEqual, useSelector } from "react-redux"
import { ReduxStore } from "redux-store"
import { useUpdateCelebratedAge } from "redux-store/actions/celebrated-age"
import { useUpdateCountdown } from "redux-store/actions/countdown"
import { useUpdateDialog } from "redux-store/actions/dialog"
import styled from "styled-components"
import { UnitPair } from "components/countdown/unit-pair"
import { getBirth, getBirthday, getNextBirthday, getYearOffset } from "utils"

type Props = {
  children?: never
}

export const Countdown: React.FunctionComponent<Props> = () => {
  const unitDigits = useSelector((store: ReduxStore) => store.unitDigits, shallowEqual)
  const unitNames = useSelector((store: ReduxStore) => store.unitNames, shallowEqual)
  const birth = useSelector((store: ReduxStore) => store.birth, shallowEqual)

  const { updateCelebratedAge } = useUpdateCelebratedAge()
  const { updateDialog } = useUpdateDialog()
  const { updateCountdown } = useUpdateCountdown()

  useEffect(() => {
    const updateTime = () => {
      // Current date
      const now = moment.utc()
      // Countdown related dates
      const birthDate = getBirth(birth)
      const birthdayDate = getBirthday(now.year(), birth)
      const nextBirthdayDate = getNextBirthday(now.year(), getYearOffset(now, birthdayDate), birth)
      // Actions
      updateCelebratedAge(now, birthDate)
      updateCountdown(now, nextBirthdayDate)
      updateDialog(now, birthdayDate)
    }

    const timerID = window.setInterval(() => updateTime(), 50)

    return () => window.clearInterval(timerID)
  })

  return (
    <CountdownContainer>
      <UnitPair unitDigit={unitDigits.days} unitName={unitNames.days} gridArea={"days"} />
      <UnitPair unitDigit={unitDigits.hours} unitName={unitNames.hours} gridArea={"hours"} />
      <UnitPair unitDigit={unitDigits.minutes} unitName={unitNames.minutes} gridArea={"minutes"} />
      <UnitPair unitDigit={unitDigits.seconds} unitName={unitNames.seconds} gridArea={"seconds"} />
    </CountdownContainer>
  )
}

/**
 * Styled components
 */

export const CountdownContainer = styled("section")`
  display: grid;
  position: relative;
  grid-template-columns: auto 160px 160px 160px 160px auto;
  grid-template-rows: auto 180px auto;
  grid-column-gap: 50px;
  grid-template-areas:
    ". . . . . ."
    ". days hours minutes seconds ."
    ". . . . . .";
  grid-area: countdown;

  @media screen and (max-width: 890px) {
    grid-template-columns: auto 160px 160px auto;
    grid-template-rows: auto 180px 180px auto;
    grid-row-gap: 50px;
    grid-template-areas:
      ". . . ."
      ". days hours ."
      ". minutes seconds ."
      ". . . .";
  }

  @media screen and (max-width: 470px) {
    grid-template-columns: auto 160px auto;
    grid-template-rows: auto 180px 180px 180px 180px auto;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-areas:
      ". . ."
      ". days ."
      ". hours ."
      ". minutes ."
      ". seconds ."
      ". . .";
  }
`
