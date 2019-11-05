import { combineReducers, createStore } from "redux"

export type ReduxStore = {}

/**
 * Redux Reducers
 */
const reducers = combineReducers<ReduxStore>({})

/**
 * Redux Store
 */
export const store = createStore(reducers)
