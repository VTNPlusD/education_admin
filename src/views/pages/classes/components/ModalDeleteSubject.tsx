import { useTranslation } from 'react-i18next'

const ModalDeleteSubject = () => {
  const { t } = useTranslation()
  return <p>{t('subject.deleteConfirm')}</p>
}

export default ModalDeleteSubject
