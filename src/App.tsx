import React, { useEffect } from "react"

import { UsersPage } from "./features/UsersPage"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { useAppSelector } from "./hooks/useAppSelector"
import { getUsersRequest } from "./store/requests"

function App() {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.main.users)
  useEffect(() => {
    data.data.length === 0 && dispatch(getUsersRequest())
  }, [data.data.length, dispatch])

  return (
    <div className="App bg-mainBlue min-h-screen h-full">
      <UsersPage />
      <div id={"modal-container"} />
    </div>
  )
}

export default App
