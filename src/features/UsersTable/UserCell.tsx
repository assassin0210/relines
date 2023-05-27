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
      <div className={"flex items-center gap-1"}>
        <img className={"w-6"} src={avatar} alt="avatar" />
        <span>{rating}</span>
        <span>
          {first_name} {last_name[0]}
        </span>
      </div>
    </div>
  )
}
