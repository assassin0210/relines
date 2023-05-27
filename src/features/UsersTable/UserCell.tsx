import React from "react"

import { Button } from "../../components/button/Button"
import { useUserRatingActions } from "../../hooks/useUserRatingActions"
import { IUser } from "../../types/common"

export const LeftSideCell = ({
  avatar,
  first_name,
  last_name,
  rating,
  uid,
}: IUser) => {
  const ratingActions = useUserRatingActions()
  if (typeof rating === "number") {
    return <></>
  }
  return (
    <div className={"flex items-center justify-between w-full gap-1"}>
      <div className={"flex items-center gap-1"}>
        <img className={"w-6"} src={avatar} alt="avatar" />
        <span>
          {first_name} {last_name[0]}
        </span>
      </div>
      <div className={"space-x-2"}>
        <Button
          className={"w-6"}
          onClick={() => ratingActions(uid, "increment")}
        >
          +
        </Button>
        <Button
          className={"w-6"}
          onClick={() => ratingActions(uid, "decrement")}
        >
          -
        </Button>
      </div>
    </div>
  )
}

export const RightSideCell = ({
  avatar,
  first_name,
  last_name,
  rating,
  uid,
}: IUser) => {
  const ratingActions = useUserRatingActions()

  if (typeof rating !== "number") {
    return <></>
  }
  return (
    <div className={"flex items-center gap-1 w-full"}>
      <div className={"space-x-2 flex items-center"}>
        <Rating rating={rating} />
        <Button
          className={"w-6"}
          onClick={() => ratingActions(uid, "increment")}
        >
          +
        </Button>
        <Button
          className={"w-6"}
          onClick={() => ratingActions(uid, "decrement")}
        >
          -
        </Button>
      </div>
      <div className={"flex items-center gap-1"}>
        <img className={"w-6"} src={avatar} alt="avatar" />

        <span>
          {first_name} {last_name[0]}
        </span>
      </div>
    </div>
  )
}

const Rating = ({ rating }: { rating: number }) => {
  const getColor = () => {
    if (rating === -5) {
      return "bg-red-500"
    }
    if (rating === -4) {
      return "bg-red-400"
    }
    if (rating === -3) {
      return "bg-red-300"
    }
    if (rating === -2) {
      return "bg-red-200"
    }
    if (rating === -1) {
      return "bg-red-100"
    }
    if (rating === 0) {
      return ""
    }
    if (rating === 1) {
      return "bg-green-100"
    }
    if (rating === 2) {
      return "bg-green-300"
    }
    if (rating === 3) {
      return "bg-green-300"
    }
    if (rating === 4) {
      return "bg-green-400"
    }
    if (rating === 5) {
      return "bg-green-500"
    }
  }
  return (
    <div
      className={`w-6 h-6 rounded-full   flex items-center justify-center transition ${getColor()}`}
    >
      {rating}
    </div>
  )
}
