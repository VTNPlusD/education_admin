import InputLabel from 'components/inputLabel/InputLabel'
import { useTranslation } from 'react-i18next'

type Props = {
  handleChangeName: (val: string) => void
}

const ModalAddChapter = ({ handleChangeName }: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      <InputLabel label={t('chapter.name')} onChange={handleChangeName} />
    </div>
  )
}

export default ModalAddChapter
