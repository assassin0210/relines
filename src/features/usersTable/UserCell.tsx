import React from "react"

import { Button } from "../../components/button/Button"
import { P16 } from "../../components/typography"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useUserRatingActions } from "../../hooks/useUserRatingActions"
import { resetRating } from "../../store/slice"
import { IUser } from "../../types/common"

export const LeftSideCell = ({
  avatar,
  first_name,
  last_name,
  rating,
  uid,
}: IUser) => {
  if (typeof rating === "number") {
    return <></>
  }
  return (
    <div className={"flex items-center justify-between w-full gap-1"}>
      <div className={"flex items-center gap-1 mr-auto"}>
        <img className={"w-6"} src={avatar} alt="avatar" />
        <P16 className={"truncate !font-medium"}>
          {first_name} {last_name[0]}.
        </P16>
      </div>
      <Actions rating={rating} uid={uid} />
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
  if (typeof rating !== "number") {
    return <></>
  }
  return (
    <div className={"flex items-center gap-1 w-full"}>
      <Actions rating={rating} uid={uid} />
      <div className={"flex items-center gap-1"}>
        <img className={"w-6"} src={avatar} alt="avatar" />

        <P16 className={"truncate !font-medium"}>
          {first_name} {last_name[0]}
        </P16>
      </div>
    </div>
  )
}

const Actions = ({
  uid,
  rating,
}: {
  uid: string
  rating: number | null | undefined
}) => {
  const dispatch = useAppDispatch()

  const ratingActions = useUserRatingActions()
  return (
    <div className={"tablet:space-x-2 space-x-1 flex items-center"}>
      {typeof rating === "number" && <Rating rating={rating} />}
      <Button className={"w-6"} onClick={() => ratingActions(uid, "increment")}>
        +
      </Button>
      <Button className={"w-6"} onClick={() => ratingActions(uid, "decrement")}>
        -
      </Button>
      {rating === 0 && (
        <Button className={"w-6"} onClick={() => dispatch(resetRating(uid))}>
          Удалить
        </Button>
      )}
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
    <span
      className={`w-6 h-6 rounded-full text-black text-[14px] tablet:text-[16px]  flex items-center justify-center transition ${getColor()}`}
    >
      {rating}
    </span>
  )
}
