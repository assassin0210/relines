import { ITableColumns } from "../../types/common"

export const getParamWidth = (column: ITableColumns) => {
  if (column.maxWidth && column.minWidth) {
    return `minmax(${column.minWidth}px , ${column.minWidth}px)`
  } else if (column.width) {
    return `minmax(${column.width}px , ${column.width}px)`
  } else if (column.gridWidth) {
    return column.gridWidth
  } else {
    return "1fr"
  }
}
