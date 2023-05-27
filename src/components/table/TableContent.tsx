import { motion } from "framer-motion"
import { memo, useMemo } from "react"
import { useInView } from "react-intersection-observer"

import { ILoadingStatus, ITableColumns, ITableProps } from "../../types/common"
import { getParamWidth } from "./tableHelpers"
import { TableNoData } from "./TableNoData"
import { TableSpinner } from "./TableSpinner"

export const TableContent = memo(
  ({
    columns,
    data,
    status,
  }: {
    columns: ITableColumns[]
    status: ITableProps["status"]
    data: unknown[]
  }) => {
    const gridCols = useMemo(
      () => columns.map((el) => getParamWidth(el)).join(" "),
      [columns]
    )
    const showNoData = useMemo(() => data.length === 0, [data.length])
    return (
      <div className={"relative"}>
        <div
          className={
            "overflow-auto max-h-[627px] min-w-0 border border-gray400 rounded-[12px]"
          }
        >
          {
            <div
              style={{ gridTemplateColumns: gridCols }}
              className={"grid  bg-gray400"}
            >
              {columns?.map((column, index) => (
                <TableHeaderCell key={index} column={column} />
              ))}
              <TableSpinner status={status} />
              {showNoData ? (
                <TableNoData />
              ) : (
                data.map((row: any, index, array) =>
                  columns.map((column, i) => (
                    <TableRowCell
                      lastRow={index + 1 === array.length}
                      column={column}
                      status={status}
                      key={i}
                      row={row}
                    />
                  ))
                )
              )}
            </div>
          }
        </div>
      </div>
    )
  }
)

const TableRowCell = memo(
  ({
    column,
    row,
    lastRow,
    status,
  }: {
    column: ITableColumns
    row: any
    lastRow: boolean
    status: ILoadingStatus
  }) => {
    const [ref, inView] = useInView({
      threshold: 0.8,
    })
    return (
      <div
        ref={ref}
        style={{ justifyContent: column.position ?? "left" }}
        className={`flex items-center bg-white ${
          lastRow ? "" : "border-b border-gray400"
        }`}
      >
        <div
          className={`tablet:px-6 px-2  w-full flex items-center min-h-[56px] h-fit ${
            column?.className || ""
          }`}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30, y: -30, scale: 1.2 },
              visible: { opacity: 1, x: 0, y: 0, scale: 1 },
              exit: { opacity: 0, x: -30, y: 30, scale: 0.5 },
            }}
            initial="hidden"
            exit="exit"
            animate={inView && status !== "loading" ? "visible" : "hidden"}
            transition={{
              duration: 0.1,
              delay: 0,
              type: "spring",
              stiffness: 100,
            }}
          >
            {column?.render ? (
              column.render(row)
            ) : (
              <span> {row[column.field] || " - "}</span>
            )}
          </motion.div>
        </div>
      </div>
    )
  }
)

const TableHeaderCell = memo(({ column }: { column: ITableColumns }) => {
  return (
    <div
      className={
        "px-6 py-4 h-[56px] bg-gray-50 flex items-center sticky z-[2] top-0 border-b border-gray400"
      }
      style={{ justifyContent: column.position ?? "left" }}
    >
      <span className={"whitespace-nowrap !text-[#6B7280]"}>
        {column.title}
      </span>
    </div>
  )
})
