import { PayloadAction } from "@reduxjs/toolkit"
import { ReactNode } from "react"

export interface ITableProps {
  data: unknown[]
  columns: ITableColumns[]
  currentPage?: number
  status: ILoadingStatus
  total?: number
  className?: string
  limit?: number
  noFooter?: boolean
  setItemsPerPage?: (v: string[]) => void
  onChangePagination?: (v: number) => void
  itemsPerPage?: string[]
}

export interface ITableColumns<T = any> {
  field: string
  width?: number
  minWidth?: number
  maxWidth?: number
  className?: string
  gridWidth?: string
  position?: "center" | "left" | "right"
  title: string
  type?: "date" | "price"
  render?: (data: T) => ReactNode
}

export type ILoadingStatus = "loading" | "loaded" | "error" | "init"

export interface IUser {
  avatar: string
  first_name: string
  last_name: string
  uid: string
  id: number
  rating?: number | null
}

export type TActionType = PayloadAction<"increment" | "decrement"> | undefined
