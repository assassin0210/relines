import { useCallback } from "react"

import { decrementRating, incrementRating } from "../store/slice"
import { useAppDispatch } from "./useAppDispatch"
import { useAppSelector } from "./useAppSelector"

export const useUserRatingActions = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.main.users.data)
  return useCallback(
    (uid: string, type?: "increment" | "decrement") => {
      const currentUser = users.find((el) => el.uid === uid)

      if (type === "increment") {
        if ((currentUser?.rating || 0) > 4) {
          // eslint-disable-next-line no-console
          return console.log("open modal")
        }
        // eslint-disable-next-line no-console
        console.log("increment")
        dispatch(incrementRating(uid))
      } else if (type === "decrement") {
        if ((currentUser?.rating || 0) < -4) {
          // eslint-disable-next-line no-console
          return console.log("open modal")
        }

        // eslint-disable-next-line no-console
        console.log("increment")
        dispatch(decrementRating(uid))
      }
    },
    [dispatch, users]
  )
}
