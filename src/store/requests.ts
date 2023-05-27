import { createAsyncThunk } from "@reduxjs/toolkit"

import { instance } from "../api/instance"
import { IUser } from "../types/common"
import { RootStateType } from "./store"

export const getUsersRequest = createAsyncThunk(
  "getUsersRequest",
  async (_: void, { getState }) => {
    const page = (getState() as RootStateType).main.users.page

    const { data } = await instance.get<IUser[]>(`?size=10&page=${page}`)
    if (page > 1) {
      return [...(getState() as RootStateType).main.users.data, ...data]
    }
    return data
  }
)
