import React, { useCallback } from "react"

import { Button } from "../../components/button/Button"
import { saveTableData } from "../../helpers/saveTableData"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { getUsersRequest } from "../../store/requests"
import { setPage } from "../../store/slice"

export const UsersTableFooter = () => {
  const dispatch = useAppDispatch()
  const disabled = useAppSelector(
    (state) => state.main.users.status === "loading"
  )

  const handleNext = useCallback(() => {
    dispatch(setPage())
    dispatch(getUsersRequest())
  }, [dispatch])

  const handleRefresh = () => {
    dispatch(setPage("refresh"))
    saveTableData([], 1)
    dispatch(getUsersRequest())
  }
  return (
    <div className={"mt-4  space-x-4"}>
      <Button disabled={disabled} onClick={handleRefresh}>
        Refresh
      </Button>
      <Button disabled={disabled} onClick={handleNext}>
        Next users
      </Button>
    </div>
  )
}
