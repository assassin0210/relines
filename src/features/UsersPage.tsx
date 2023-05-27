import { P16 } from "../components/typography"
import { MODAL_NAMES } from "../consts/common"
import { ActionUserModal } from "./modals/ActionUserModal"
import { UsersTable } from "./usersTable/UsersTable"
import { UsersTableFooter } from "./usersTable/UsersTableFooter"

export const UsersPage = () => {
  return (
    <div className={"py-5 max-w-[1200px] px-2 mx-auto"}>
      <P16 className={"text-white"}>
        Данное тестовое задание выболнено{" "}
        <a
          className={"!text-mainGreen"}
          target={"_blank"}
          href={"https://nextjs-assassin0210.vercel.app/"}
          rel="noreferrer"
        >
          Соколовым Александром
        </a>{" "}
        в компанию{" "}
        <a
          className={"!text-mainGreen"}
          target={"_blank"}
          href="https://relines.ru/"
          rel="noreferrer"
        >
          relines.ru
        </a>
        .
      </P16>

      <P16 className={"text-white"}>
        Время , затраченное на работу : 7 часов 30 минут.
      </P16>
      <UsersTable />
      <UsersTableFooter />
      <ActionUserModal modal={MODAL_NAMES.INCREMENT_MODAL} />
      <ActionUserModal modal={MODAL_NAMES.DECREMENT_MODAL} />
    </div>
  )
}
