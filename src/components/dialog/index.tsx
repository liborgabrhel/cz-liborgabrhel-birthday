import { IconClose } from "components/icons/icon-close"
import { Text } from "components/typography/text"
import React from "react"
import { shallowEqual, useSelector } from "react-redux"
import { ReduxStore } from "redux-store"
import { useCloseDialog } from "redux-store/actions/dialog"
import styled from "styled-components"

type Props = {
  children?: never
}

export const Dialog: React.FunctionComponent<Props> = () => {
  const dialog = useSelector((store: ReduxStore) => store.dialog, shallowEqual)
  const currentCelebratedAge = useSelector((store: ReduxStore) => store.celebratedAge.current, shallowEqual)
  const { closeDialog } = useCloseDialog()

  if (!dialog.isActive || !dialog.isVisible) {
    return null
  }

  return (
    <DialogWindow>
      <Button onClick={closeDialog} title={"Close the notice"}>
        <IconClose />
      </Button>
      <DialogMessage>{`I have just turned ${currentCelebratedAge}!!!`}</DialogMessage>
    </DialogWindow>
  )
}

/**
 * Styled components
 */

const DialogWindow = styled("section")`
  display: grid;
  position: fixed;
  grid-template-columns: auto 600px auto;
  grid-template-rows: auto max-content auto;
  grid-template-areas:
    ". . ."
    " . message ."
    ". . .";
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);

  @media screen and (max-width: 679px) {
    grid-template-columns: auto 200px auto;
  }
`

const DialogMessage = styled(Text)`
  font-size: 48px;
  font-weight: lighter;
  font-style: italic;
  grid-area: message;
  justify-self: center;
  text-align: left;
  color: whitesmoke;
  cursor: default;
  user-select: none;

  @media screen and (max-width: 679px) {
    text-align: center;
    font-size: 42px;
  }
`

const Button = styled("div")`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`
