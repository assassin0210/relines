import React from "react"

import { Table } from "../../components/table/Table"
import { useAppSelector } from "../../hooks/useAppSelector"
import { ITableColumns, IUser } from "../../types/common"
import { LeftSideCell, RightSideCell } from "./UserCell"

export const UsersTable = () => {
  const { data, status } = useAppSelector((state) => state.main.users)
  const columns = useColumns()

  return (
    <Table
      itemsPerPage={["10"]}
      data={data}
      className={"mt-5"}
      columns={columns}
      status={status}
    />
  )
}

const useColumns = () => {
  const columns: ITableColumns<IUser>[] = [
    {
      field: "leftSide",
      title: "Все юзеры",
      gridWidth: "auto",
      render: (props) => <LeftSideCell {...props} />,
    },
    {
      field: "rightSide",
      title: "Юзеры с рейтингом ",
      render: (props) => <RightSideCell {...props} />,
    },
  ]

  return columns
}
