import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ILoadingStatus, IUser } from "../types/common"
import { getUsersRequest } from "./requests"

interface IInitialState {
  users: {
    data: IUser[]
    status: ILoadingStatus
  }
}

const initialState: IInitialState = {
  users: {
    data: [],
    status: "init",
  },
}

const mainSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    //для облегчения понимания работы экшенов , я вынес их оттдельно
    //можно было обойтись одним , только передавая тип действия необходимого
    incrementRating: (state, { payload }: PayloadAction<string>) => {
      state.users.data = state.users.data.map((user) => {
        if (user.uid === payload) {
          // if ((user?.rating || 0) > 4) {
          //   return user
          // }
          return { ...user, rating: (user?.rating || 0) + 1 }
        } else {
          return user
        }
      })
    },
    decrementRating: (state, { payload }: PayloadAction<string>) => {
      state.users.data = state.users.data.map((user) => {
        if (user.uid === payload) {
          if ((user?.rating || 0) < -4) {
            return user
          }
          return { ...user, rating: (user?.rating || 0) - 1 }
        } else {
          return user
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersRequest.pending, (state) => {
      state.users.status = "loading"
    })
    builder.addCase(getUsersRequest.fulfilled, (state, { payload }) => {
      state.users.status = "loaded"
      state.users.data = payload
    })
    builder.addCase(getUsersRequest.rejected, (state) => {
      state.users.status = "error"
    })
  },
})
export const main = mainSlice.reducer
export const { incrementRating, decrementRating } = mainSlice.actions
