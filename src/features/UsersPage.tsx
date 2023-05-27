import { Button } from "../components/button/Button"
import { Modal } from "../components/modal/Modal"
import { MODAL_NAMES } from "../consts/common"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useModal } from "../hooks/useModal"
import { setModal } from "../store/slice"
import { UsersTable } from "./UsersTable/UsersTable"
import { UsersTableFooter } from "./UsersTable/UsersTableFooter"

export const UsersPage = () => {
  const { currentModal } = useModal()
  const dispatch = useAppDispatch()
  return (
    <div className={"py-10 max-w-[1200px] px-2 mx-auto"}>
      <UsersTable />
      <UsersTableFooter />
      <Button
        onClick={() =>
          dispatch(setModal({ currentModal: MODAL_NAMES.INCREMENT_MODAL }))
        }
      >
        open
      </Button>
      <Modal isOpen={currentModal === MODAL_NAMES.INCREMENT_MODAL}>
        12312312312231
      </Modal>
    </div>
  )
}
