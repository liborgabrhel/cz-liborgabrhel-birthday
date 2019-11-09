import { combineReducers, createStore } from "redux"
import { celebratedAgeReducer, CelebratedAgeState } from "redux-store/reducers/celebrated-age"

export type ReduxStore = {
  celebratedAge: CelebratedAgeState
}

/**
 * Redux Reducers
 */
const reducers = combineReducers<ReduxStore>({
  celebratedAge: celebratedAgeReducer,
})

/**
 * Redux Store
 */
export const store = createStore(reducers)
