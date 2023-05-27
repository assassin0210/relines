import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from "react"

import { P16 } from "../typography"

type IButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>
export const Button = memo(({ children, className, ...rest }: IButton) => {
  return (
    <button
      className={` h-fit w-fit disabled:opacity-50 bg-green-600 text-white px-2 py-0.5 rounded-[8px] shadow-inner transition-shadow  active:shadow-green-700 active:drop-shadow-md hover:shadow-green-400
${className || ""}`}
      {...rest}
    >
      <P16 className={"!text-white"}>{children}</P16>
    </button>
  )
})
