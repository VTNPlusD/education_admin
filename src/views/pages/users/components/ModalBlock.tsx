import { useTranslation } from 'react-i18next'

const ModalBlock = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('sideBar.usersManagement.blockConfirm')}</p>
    </div>
  )
}

export default ModalBlock
