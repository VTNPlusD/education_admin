import ActiveSelect from 'components/activeSelect/ActiveSelect'
import InputLabel from 'components/inputLabel/InputLabel'
import { useTranslation } from 'react-i18next'

type Props = {
  name: string
  order: string
  active: boolean
  handleChangeName: (val: string) => void
  handleChangeOrder: (val: string) => void
  handleChangeActive: (val: boolean) => void
}

const ModalEditSubject = ({
  name,
  order,
  active,
  handleChangeName,
  handleChangeOrder,
  handleChangeActive
}: Props) => {
  const { t } = useTranslation()
  return (
    <div>
      <InputLabel
        value={name}
        label={t('subject.form.name')}
        onChange={handleChangeName}
      />
      <InputLabel
        value={order}
        type='number'
        label={t('subject.order')}
        onChange={handleChangeOrder}
      />
      <ActiveSelect active={active} handleChangeActive={handleChangeActive} />
    </div>
  )
}

export default ModalEditSubject
