import React from "react"
import styled from "styled-components"
import { UnitDigit } from "components/countdown/unit-pair/unit-digit"
import { UnitName } from "components/countdown/unit-pair/unit-name"

type Props = {
  unitDigit: number
  unitName: string
  gridArea: string
  children?: never
}

export const UnitPair: React.FunctionComponent<Props> = ({ unitDigit, unitName, gridArea }) => {
  return (
    <UnitPairContainer gridArea={gridArea}>
      <UnitDigit>{unitDigit}</UnitDigit>
      <UnitName>{unitName}</UnitName>
    </UnitPairContainer>
  )
}

/**
 * Styled components
 */

const UnitPairContainer = styled("section")<{ gridArea: string }>`
  display: grid;
  position: relative;
  justify-items: center;
  align-items: center;
  grid-template-columns: 160px;
  grid-template-rows: 140px 40px;
  grid-template-areas:
    "digit"
    "name";
  grid-area: ${props => props.gridArea};
`
