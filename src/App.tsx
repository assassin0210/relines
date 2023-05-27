import React from "react"

import { ModalProvider } from "./providers/ModalProvider"

function App() {
  return (
    <ModalProvider>
      <div className="App">123</div>
    </ModalProvider>
  )
}

export default App
