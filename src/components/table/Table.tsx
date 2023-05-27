import { ITableProps } from "../../types/common"
import { TableContent } from "./TableContent"

export const Table = (props: ITableProps) => {
  return (
    <div className={` ${props.className || ""}`}>
      <TableContent
        status={props.status}
        data={props.data}
        columns={props.columns}
      />
    </div>
  )
}
