import { AnimatePresence, motion } from "framer-motion"

import { ITableProps } from "../../types/common"

export const TableSpinner = ({ status }: { status: ITableProps["status"] }) => {
  return (
    <AnimatePresence>
      {status === "loading" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className={
            "absolute z-[10] rounded-[12px]  bg-white opacity-50 left-0 bottom-0 h-full w-full flex items-center justify-center"
          }
        >
          <span>Loading...</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
