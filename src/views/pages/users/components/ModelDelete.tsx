import { useTranslation } from 'react-i18next'

const ModalDelete = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p>{t('sideBar.usersManagement.deleteConfirm')}</p>
    </div>
  )
}

export default ModalDelete
