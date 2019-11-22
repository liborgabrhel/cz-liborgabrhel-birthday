import { Text } from "components/typography/text"
import { useEffect, useRef, useState } from "react"
import React from "react"
import { useSpring, animated, config } from "react-spring"
import styled from "styled-components"

type Props = {
  children: number
}

export const UnitDigit: React.FunctionComponent<Props> = ({ children }) => {
  const [currentDigit, setCurrentDigit] = useState(0)
  const previousDigit = usePrevious(currentDigit)

  useEffect(() => {
    setCurrentDigit(children)
  }, [children])

  const ANIMATION_CONFIG = config.slow
  const IS_RESET_ACTIVE = previousDigit !== currentDigit

  const frontCardProps = useSpring({
    from: { transform: "rotateX(0deg)" },
    to: { transform: "rotateX(-180deg)" },
    config: ANIMATION_CONFIG,
    reset: IS_RESET_ACTIVE,
  })

  const backCardProps = useSpring({
    from: { transform: "rotateX(180deg)" },
    to: { transform: "rotateX(0deg)" },
    config: ANIMATION_CONFIG,
    reset: IS_RESET_ACTIVE,
  })

  return (
    <UnitDigitContainer>
      <StaticUpperCard>
        <UpperDigit>{currentDigit}</UpperDigit>
      </StaticUpperCard>

      <StaticLowerCard>
        <LowerDigit>{previousDigit}</LowerDigit>
      </StaticLowerCard>

      <AnimatedCardFront style={frontCardProps}>
        <AnimatedCardDigit reversed={false}>{previousDigit}</AnimatedCardDigit>
      </AnimatedCardFront>

      <AnimatedCardBack style={backCardProps}>
        <AnimatedCardDigit reversed={true}>{currentDigit}</AnimatedCardDigit>
      </AnimatedCardBack>
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

const AnimatedCardFront = styled(animated.div)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  min-width: 160px;
  height: 60px;
  overflow: hidden;
  background-color: white;
  border: 1px solid ${borderColor};
  align-items: flex-end;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  transform: rotate3d(0deg);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`

const AnimatedCardBack = styled(animated.div)`
  display: flex;
  position: absolute;
  top: 60px;
  left: 0;
  justify-content: center;
  min-width: 160px;
  height: 60px;
  overflow: hidden;
  background-color: white;
  border: 1px solid ${borderColor};
  align-items: flex-start;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: 50% 0;
  transform: rotate3d(180deg);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

type AnimatedCardProps = {
  reversed: boolean
}

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
