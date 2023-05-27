import { useCallback } from "react"

import { setModal } from "../store/slice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"

export const useModal = () => {
  const data = useAppSelector((state) => state.main.modal)
  const dispatch = useAppDispatch()
  return {
    ...data,
    onCloseModal: useCallback(() => dispatch(setModal()), [dispatch]),
  }
}
