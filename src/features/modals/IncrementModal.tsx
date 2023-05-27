import { Modal } from "../../components/modal/Modal"
import { MODAL_NAMES } from "../../consts/common"
import { useModal } from "../../hooks/useModal"

export const IncrementModal = () => {
  const { currentModal } = useModal()

  return (
    <Modal isOpen={currentModal === MODAL_NAMES.INCREMENT_MODAL}>
      12312312312231
    </Modal>
  )
}
