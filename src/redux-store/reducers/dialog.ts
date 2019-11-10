import { DialogActionData, dialogActions } from "redux-store/actions/dialog"
import { Action } from "redux-store/types"

/**
 * State Type
 */
export type DialogState = {
  isActive: boolean
  isVisible: boolean
}

/**
 * Initial state
 */
export const initialDialogState: DialogState = {
  isActive: true,
  isVisible: false,
}

/**
 * Reducer
 *
 * @param state
 * @param action
 */
export const dialogReducer = (
  state: DialogState = initialDialogState,
  action: Action<DialogActionData>
): DialogState => {
  switch (action.type) {
    case dialogActions.updateDialog: {
      if (action.data) {
        return {
          ...state,
          isVisible: action.data.isVisible,
        }
      } else {
        console.error(`No data provided for action "updateDialog"!`)
        return state
      }
    }

    case dialogActions.closeDialog: {
      return {
        isActive: false,
        isVisible: false,
      }
    }

    default: {
      return state
    }
  }
}
