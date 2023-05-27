import { Button } from "../../components/button/Button"
import { Modal } from "../../components/modal/Modal"
import { P16 } from "../../components/typography"
import { MODAL_NAMES } from "../../consts/common"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useModal } from "../../hooks/useModal"
import { resetRating } from "../../store/slice"

export const ActionUserModal = ({ modal }: { modal: MODAL_NAMES }) => {
  const { currentModal, uid, name, onCloseModal } = useModal()
  const dispatch = useAppDispatch()
  const handleYes = () => {
    dispatch(resetRating(uid))
    onCloseModal()
    if (modal === MODAL_NAMES.DECREMENT_MODAL) {
      // eslint-disable-next-line no-console
      console.log(`Пользователь забанил юзера по имени ${name}`)
    } else if (modal === MODAL_NAMES.INCREMENT_MODAL) {
      // eslint-disable-next-line no-console
      console.log(`Пользователь возноградил юзера по имени ${name}`)
    }
  }

  const text: Record<MODAL_NAMES, string> = {
    INCREMENT_MODAL: "Нужно вознаградить",
    DECREMENT_MODAL: "Пора забанить",
  }
  return (
    <Modal isOpen={currentModal === modal}>
      {(onClose) => (
        <>
          <P16 className={"!front-semibold"}>
            {text[modal]} <span className={"font-bold"}>{name || ""}</span>.
            Сделать это?
          </P16>
          <div className={"flex items-center justify-center gap-5 mt-5"}>
            <Button className={"px-5 py-2"} onClick={handleYes}>
              Да
            </Button>
            <Button className={"px-5 py-2"} onClick={onClose}>
              Нет
            </Button>
          </div>
        </>
      )}
    </Modal>
  )
}
