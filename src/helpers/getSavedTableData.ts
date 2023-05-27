import { LOCALE_ST_KEY } from "../consts/common"

export const getSavedTableData = () => {
  return JSON.parse(
    localStorage.getItem(LOCALE_ST_KEY) || '{"data":[],"page":1}'
  )
}
