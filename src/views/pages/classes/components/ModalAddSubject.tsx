import InputLabel from 'components/inputLabel/InputLabel'
import { useTranslation } from 'react-i18next'

type Props = {
  handleChangeName: (val: string) => void
}

const ModalAddSubject = ({ handleChangeName }: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      <InputLabel label={t('subject.form.name')} onChange={handleChangeName} />
    </div>
  )
}

export default ModalAddSubject
