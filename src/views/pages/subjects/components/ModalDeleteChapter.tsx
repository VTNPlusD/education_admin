import { useTranslation } from 'react-i18next'

const ModalDeleteChapter = () => {
  const { t } = useTranslation()
  return <p>{t('chapter.deleteConfirm')}</p>
}

export default ModalDeleteChapter
