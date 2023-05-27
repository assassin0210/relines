import { MODAL_NAMES } from "../consts/common"
import { ActionUserModal } from "./modals/ActionUserModal"
import { UsersTable } from "./UsersTable/UsersTable"
import { UsersTableFooter } from "./UsersTable/UsersTableFooter"

export const UsersPage = () => {
  return (
    <div className={"py-10 max-w-[1200px] px-2 mx-auto"}>
      <UsersTable />
      <UsersTableFooter />
      <ActionUserModal modal={MODAL_NAMES.INCREMENT_MODAL} />
      <ActionUserModal modal={MODAL_NAMES.DECREMENT_MODAL} />
    </div>
  )
}
