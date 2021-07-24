import { useTranslation } from 'react-i18next'

const ModalDelete = () => {
  const { t } = useTranslation()
  return <p>{t('sideBar.classesManagement.deleteConfirm')}</p>
}

export default ModalDelete
