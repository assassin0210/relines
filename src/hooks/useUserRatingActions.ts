import { useCallback } from "react"

import { MODAL_NAMES } from "../consts/common"
import { decrementRating, incrementRating, setModal } from "../store/slice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"

export const useUserRatingActions = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.main.users.data)
  return useCallback(
    (uid: string, type?: "increment" | "decrement") => {
      const currentUser = users.find((el) => el.uid === uid)

      if (type === "increment") {
        if ((currentUser?.rating || 0) === 5) {
          return dispatch(
            setModal({
              currentModal: MODAL_NAMES.INCREMENT_MODAL,
              name: currentUser?.first_name,
              uid: uid,
            })
          )
        } else if ((currentUser?.rating || 0) === 4) {
          dispatch(incrementRating(uid))
          return dispatch(
            setModal({
              currentModal: MODAL_NAMES.INCREMENT_MODAL,
              name: currentUser?.first_name,
              uid: uid,
            })
          )
        }

        dispatch(incrementRating(uid))
      } else if (type === "decrement") {
        if ((currentUser?.rating || 0) === -5) {
          return dispatch(
            setModal({
              currentModal: MODAL_NAMES.DECREMENT_MODAL,
              name: currentUser?.first_name,
              uid: uid,
            })
          )
        } else if ((currentUser?.rating || 0) === -4) {
          dispatch(decrementRating(uid))
          return dispatch(
            setModal({
              currentModal: MODAL_NAMES.DECREMENT_MODAL,
              name: currentUser?.first_name,
              uid: uid,
            })
          )
        }

        dispatch(decrementRating(uid))
      }
    },
    [dispatch, users]
  )
}
