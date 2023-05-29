import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getSavedTableData } from "../helpers/getSavedTableData"
import { saveTableData } from "../helpers/saveTableData"
import { ILoadingStatus, IUser } from "../types/common"
import { getUsersRequest } from "./requests"

export interface IInitialState {
  modal: {
    currentModal: string | null
    uid: string
    name: string
  }

  users: {
    data: IUser[]
    status: ILoadingStatus
    page: number
  }
}

const initialState: IInitialState = {
  modal: {
    currentModal: null,
    uid: "",
    name: "",
  },
  users: {
    data: getSavedTableData().data,
    status: "init",
    page: Number(getSavedTableData().page),
  },
}

const mainSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setModal: (
      state,
      { payload }: PayloadAction<Partial<IInitialState["modal"]> | undefined>
    ) => {
      if (!payload) {
        state.modal = initialState.modal
      } else {
        state.modal = { ...state.modal, ...payload }
      }
    },
    setPage: (state, { payload }: PayloadAction<"refresh" | undefined>) => {
      if (payload === "refresh") {
        // eslint-disable-next-line no-console
        console.log("Пользователь нажал кнопку Обновить страницу ")
        state.users.page = 1
      } else {
        // eslint-disable-next-line no-console
        console.log("Пользователь нажал на кнопку Следующая страница")
        state.users.page += 1
      }
    },
    //для облегчения понимания работы экшенов , я вынес их оттдельно
    //можно было обойтись одним , только передавая тип действия необходимого
    incrementRating: (state, { payload }: PayloadAction<string>) => {
      // eslint-disable-next-line no-console
      console.log(`Пользователь увеличел юзеру с  uid ${payload} рейтинг на 1`)
      const newData = state.users.data.map((user) => {
        if (user.uid === payload) {
          return { ...user, rating: (user?.rating || 0) + 1 }
        } else {
          return user
        }
      })
      saveTableData(newData, state.users.page)
      state.users.data = newData
    },
    decrementRating: (state, { payload }: PayloadAction<string>) => {
      // eslint-disable-next-line no-console
      console.log(`Пользователь уменьшил юзеру с  uid ${payload} рейтинг на 1`)

      const newData = state.users.data.map((user) => {
        if (user.uid === payload) {
          return { ...user, rating: (user?.rating || 0) - 1 }
        } else {
          return user
        }
      })
      saveTableData(newData, state.users.page)
      state.users.data = newData
    },
    resetRating: (state, { payload }: PayloadAction<string>) => {
      const newData = state.users.data.map((user) => {
        if (user.uid === payload) {
          return { ...user, rating: null }
        } else {
          return user
        }
      })
      state.users.data = newData
      saveTableData(newData, state.users.page)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersRequest.pending, (state) => {
      state.users.status = "loading"
    })
    builder.addCase(getUsersRequest.fulfilled, (state, { payload }) => {
      state.users.status = "loaded"
      state.users.data = payload
      saveTableData(payload, state.users.page)
    })
    builder.addCase(getUsersRequest.rejected, (state) => {
      state.users.status = "error"
    })
  },
})
export const main = mainSlice.reducer
export const {
  incrementRating,
  resetRating,
  setModal,
  setPage,
  decrementRating,
} = mainSlice.actions
