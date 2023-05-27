import { createContext, ReactNode, useState } from "react"

interface IContextValue {
  currentModal: string | null
  data: Record<string, any>
  onCloseModal: () => void
  onOpenModal: (data: TState) => void
}

const defaultValue: IContextValue = {
  currentModal: null,
  data: {},
  onCloseModal: () => null,
  onOpenModal: () => null,
}

type TState = Pick<IContextValue, "currentModal" | "data">
export const ModalContext = createContext(defaultValue)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<TState>({ currentModal: null, data: {} })

  const onCloseModal = () => {
    setValue({ currentModal: null, data: {} })
  }

  const onOpenModal = (data: TState) => {
    setValue(data)
  }

  return (
    <ModalContext.Provider value={{ ...value, onCloseModal, onOpenModal }}>
      {children}
    </ModalContext.Provider>
  )
}
