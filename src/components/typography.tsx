import { ReactNode } from "react"

export const P16 = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p className={`tablet:text-[16px] text-[14px] text-gray-700 ${className}`}>
      {children}
    </p>
  )
}
