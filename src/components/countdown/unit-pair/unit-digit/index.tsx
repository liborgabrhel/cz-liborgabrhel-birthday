import { Text } from "components/typography/text"
import { useEffect, useRef, useState } from "react"
import React from "react"
import styled, { keyframes } from "styled-components"

type Props = {
  children: number
}

export const UnitDigit: React.FunctionComponent<Props> = ({ children }) => {
  const previousChildren = usePrevious(children)
  const [shuffle, setShuffle] = useState(true)
  const [previousDigit, setPreviousDigit] = useState(0)
  const [currentDigit, setCurrentDigit] = useState(0)

  useEffect(() => {
    setShuffle(state => !state)
    setPreviousDigit(previousChildren)
    setCurrentDigit(children)
  }, [children])

  const digit1 = shuffle ? previousDigit : currentDigit
  const digit2 = shuffle ? currentDigit : previousDigit

  return (
    <UnitDigitContainer>
      <StaticUpperCard>
        <UpperDigit>{currentDigit}</UpperDigit>
      </StaticUpperCard>

      <StaticLowerCard>
        <LowerDigit>{previousDigit}</LowerDigit>
      </StaticLowerCard>

      <AnimatedCard reversed={!shuffle}>
        <AnimatedCardDigit reversed={!shuffle}>{digit1}</AnimatedCardDigit>
      </AnimatedCard>

      <AnimatedCard reversed={shuffle}>
        <AnimatedCardDigit reversed={shuffle}>{digit2}</AnimatedCardDigit>
      </AnimatedCard>
    </UnitDigitContainer>
  )
}

const usePrevious = (currentValue: number) => {
  const previousValue = useRef(0)
  useEffect(() => {
    previousValue.current = currentValue
  }, [currentValue])
  return previousValue.current
}

/**
 * Styled components
 */

const UnitDigitContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  grid-area: digit;
  width: 160px;
  min-height: 120px;
  perspective-origin: 50% 50%;
  perspective: 300px;
  box-shadow: 0 10px 10px -10px #333333;
  cursor: default;
  user-select: none;
`

const borderColor = "whitesmoke"

const CardContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  min-width: 160px;
  height: 60px;
  overflow: hidden;
  background-color: white;
  border: 1px solid ${borderColor};
`

const StaticUpperCard = styled(CardContainer)`
  align-items: flex-end;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

const StaticLowerCard = styled(CardContainer)`
  align-items: flex-start;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

type AnimatedCardProps = {
  reversed: boolean
}

const getTopOffset = (props: AnimatedCardProps) => (props.reversed ? "60px" : "0px")
const getItemsAlignment = (props: AnimatedCardProps) => (props.reversed ? "flex-start" : "flex-end")
const getTransformOrigin = (props: AnimatedCardProps) => (props.reversed ? "50% 0%" : "50% 100%")
const getTransformRotation = (props: AnimatedCardProps) => (props.reversed ? "180" : "0")
const getBorderRadiusPosition = (props: AnimatedCardProps) => (props.reversed ? "bottom" : "top")
const getAnimationName = (props: AnimatedCardProps) => (props.reversed ? unfold : fold)

const easing = `cubic-bezier(0.455, 0.03, 0.515, 0.955)`

const AnimatedCard = styled(CardContainer)`
	position: absolute;
	top: ${getTopOffset};
	left: 0;
	align-items: ${getItemsAlignment};
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transform-origin: ${getTransformOrigin};
	transform: rotateX(${getTransformRotation}deg);
	border-${getBorderRadiusPosition}-left-radius: 3px;
	border-${getBorderRadiusPosition}-right-radius: 3px;
	animation: ${getAnimationName} 0.9s  ${easing} 0s 1 normal forwards;
`

const Digit = styled(Text)`
  font-family: "Droid Sans Mono", monospace;
  font-size: 77px;
  color: #333333;
`

const UpperDigit = styled(Digit)`
  transform: translateY(50%);
`

const LowerDigit = styled(Digit)`
  transform: translateY(-50%);
`

const getDigitPosition = (props: AnimatedCardProps) => (props.reversed ? "-50%" : "50%")

const AnimatedCardDigit = styled(Digit)`
  transform: translateY(${getDigitPosition});
`

const unfold = keyframes`
	0% {
		transform: rotateX(180deg);
	}
	100% {
		transform: rotateX(0deg);
	}
`

const fold = keyframes`
	0% {
		transform: rotateX(0deg);
	}
	100% {
		transform: rotateX(-180deg);
	}
`
