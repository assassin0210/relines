import { useAppSelector } from "./useAppSelector"

export const useModal = () => {
  return useAppSelector((state) => state.main.modal)
}
