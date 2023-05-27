import { createAsyncThunk } from "@reduxjs/toolkit"

import { instance } from "../api/instance"
import { IUser } from "../types/common"
import { RootStateType } from "./store"

export const getUsersRequest = createAsyncThunk(
  "getUsersRequest",
  async ({ page = 1 }: { page?: number }, { getState }) => {
    const { data } = await instance.get<IUser[]>(`?size=10&page=${page}`)
    if (page > 1) {
      return [...(getState() as RootStateType).main.users.data, ...data]
    }
    return data
  }
)
