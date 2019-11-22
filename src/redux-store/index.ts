import { combineReducers, createStore } from "redux"
import { birthReducer, BirthState } from "redux-store/reducers/birth"
import { celebratedAgeReducer, CelebratedAgeState } from "redux-store/reducers/celebrated-age"
import { dialogReducer, DialogState } from "redux-store/reducers/dialog"
import { unitDigitsReducer, UnitDigitsState } from "redux-store/reducers/unit-digits"
import { unitNamesReducer, UnitNamesState } from "redux-store/reducers/unit-names"

export type ReduxStore = {
  birth: BirthState
  celebratedAge: CelebratedAgeState
  dialog: DialogState
  unitDigits: UnitDigitsState
  unitNames: UnitNamesState
}

/**
 * Redux Reducers
 */
const reducers = combineReducers<ReduxStore>({
  birth: birthReducer,
  celebratedAge: celebratedAgeReducer,
  dialog: dialogReducer,
  unitDigits: unitDigitsReducer,
  unitNames: unitNamesReducer,
})

/**
 * Redux Store
 */
export const store = createStore(reducers)
