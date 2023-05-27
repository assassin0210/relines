import React, { useCallback, useState } from "react"

import { Button } from "../../components/button/Button"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { getUsersRequest } from "../../store/requests"

export const UsersTableFooter = () => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(2)
  const disabled = useAppSelector(
    (state) => state.main.users.status === "loading"
  )
  const handleNext = useCallback(() => {
    // eslint-disable-next-line no-console
    dispatch(getUsersRequest({ page }))
    setPage((prev) => prev + 1)
  }, [dispatch, page])

  const handleRefresh = () => {
    dispatch(getUsersRequest({}))
    setPage(2)
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
