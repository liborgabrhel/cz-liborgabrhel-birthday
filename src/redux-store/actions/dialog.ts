import { Moment } from "moment"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import { Action } from "redux-store/types"

/**
 * Actions
 */
export const dialogActions = {
  updateDialog: "ACT_SHOW_DIALOG",
  closeDialog: "ACT_CLOSE_DIALOG",
}

/**
 * Action data
 */
export type DialogActionData = {
  isVisible: boolean
}

/**
 * Dispatch type
 */
export type DialogDispatch = Dispatch<Action<DialogActionData>>

/**
 * Dialog visibility update function
 */
export const useUpdateDialog = () => {
  const dispatch = useDispatch<DialogDispatch>()
  const updateDialog = (now: Moment, birthday: Moment) => {
    const difference = birthday.diff(now, "days", true)
    const isVisible = -1.0 <= difference && difference <= 0.0
    dispatch({
      type: dialogActions.updateDialog,
      data: {
        isVisible,
      },
    })
  }
  return { updateDialog }
}

/**
 * Dialog close function
 */
export const useCloseDialog = () => {
  const dispatch = useDispatch<DialogDispatch>()
  const closeDialog = () => {
    dispatch({
      type: dialogActions.closeDialog,
    })
  }
  return { closeDialog }
}
