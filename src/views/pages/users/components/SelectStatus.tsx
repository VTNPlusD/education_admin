import VModal from 'components/modal/VModal'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { colors } from 'utils/colors'
import classes from 'styles/SelectStatus.module.scss'
import { EUserStatus } from 'interfaces/enums/EUserStatus'

const ModalConfirm = () => {
  const { t } = useTranslation()
  return <div>{t('sideBar.usersManagement.confirmChangeStatus')}</div>
}

type Props = {
  status: string
  handleUpdateStatus: (active: string) => void
}

const SelectStatus = ({ status, handleUpdateStatus }: Props) => {
  const { t } = useTranslation()
  const [active, setActive] = useState<string>(status)
  const [isShowModal, setIsShowModal] = useState(false)
  const [currentId, setCurrentId] = useState<string>(status)

  useEffect(() => {
    setActive(status)
  }, [status])

  const statusList = [
    {
      id: EUserStatus.ACTIVE,
      color: colors.STATUS_ACTIVE,
      title: EUserStatus.ACTIVE,
      titleColor: '#04d211'
    },
    {
      id: EUserStatus.BLOCK,
      color: colors.STATUS_BLOCK,
      title: EUserStatus.BLOCK,
      titleColor: 'red'
    },
    {
      id: EUserStatus.INACTIVE,
      color: colors.STATUS_INACTIVE,
      title: EUserStatus.INACTIVE,
      titleColor: 'orange'
    }
  ]

  const handleSelect = (id: string) => {
    setCurrentId(id)
    setIsShowModal(true)
  }

  const handleOk = () => {
    handleUpdateStatus(currentId)
    setActive(currentId)
    setIsShowModal(false)
  }

  return (
    <>
      <VModal
        title={t('sideBar.usersManagement.changeStatus')}
        isModalVisible={isShowModal}
        Content={ModalConfirm}
        handleOk={handleOk}
        handleCancel={() => setIsShowModal(false)}
      />
      <p>{t('sideBar.usersManagement.status')}</p>
      <div className={classes.container}>
        {statusList.map((status) => (
          <div key={status.id} className={classes.itemContainer}>
            <div
              onClick={() => handleSelect(status.id)}
              className={classes.icon}
              style={{
                background: status.color,
                opacity: active === status.id ? '1' : '0.3',
                boxShadow: colors.BOX_SHADOW_MAIN
              }}></div>
            <p
              className={classes.title}
              style={{
                color: active === status.id ? status.titleColor : 'gray'
              }}>
              {status.title.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default SelectStatus
