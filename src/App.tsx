import React, { useEffect } from "react"

import { UsersPage } from "./features/UsersPage"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { getUsersRequest } from "./store/requests"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getUsersRequest({}))
  }, [dispatch])

  return (
    <div className="App bg-blue-100 min-h-screen h-full">
      <UsersPage />
    </div>
  )
}

export default App
