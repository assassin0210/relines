import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { main } from "./slice"

export const rootReducer = combineReducers({
  main,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware1) =>
    getDefaultMiddleware1({
      serializableCheck: false,
    }),
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
