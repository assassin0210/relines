import { LOCALE_ST_KEY } from "../consts/common"
import { IUser } from "../types/common"

export const saveTableData = (data: IUser[], page: number) => {
  return localStorage.setItem(LOCALE_ST_KEY, JSON.stringify({ data, page }))
}
