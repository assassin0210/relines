import { AnimatePresence, motion } from "framer-motion"
import { ReactNode, useMemo, useState } from "react"
import { createPortal } from "react-dom"

import { useAppDispatch } from "../../hooks/useAppDispatch"
import { setModal } from "../../store/slice"

export const Modal = ({
  isOpen,
  children,
}: {
  isOpen: boolean
  children: (onCloseModal: () => void) => ReactNode
}) => {
  const defaultContainer = useMemo(
    () => document.getElementById("modal-container") || document.body,
    []
  )
  const [isRendered, setIsRendered] = useState(false)
  const dispatch = useAppDispatch()
  const onCloseModal = () => {
    // eslint-disable-next-line no-console
    console.log("Пользователь закрыл модальное окно")
    setIsRendered(false)
    setTimeout(() => {
      dispatch(setModal())
    }, 0)
  }

  if (!isRendered && isOpen) {
    setIsRendered(true)
  }
  return isRendered
    ? createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute z-[100] w-full h-screen top-0 left-0 flex items-center justify-center backdrop-blur-md  bg-gray-100/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-white p-10 shadow-md rounded-[12px]"
                initial={{ y: "-50%", opacity: 0, scale: 0.2 }}
                animate={{ y: "0%", opacity: 1, scale: 1 }}
                exit={{ y: "-50%", opacity: 0, scale: 1.3 }}
                transition={{ duration: 0.2, stiffness: 100 }}
              >
                {children(onCloseModal)}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        defaultContainer
      )
    : null
}
