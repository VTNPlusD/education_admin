import InputLabel from 'components/inputLabel/InputLabel'
import { useTranslation } from 'react-i18next'
import ReactQuill, { Quill } from 'react-quill'

type Props = {
  handleChangeName: (val: string) => void
  handleChangeContent: (val: string) => void
}

const ModalCreate = ({ handleChangeName, handleChangeContent }: Props) => {
  const { t } = useTranslation()
  const imageHandler = async (val: any) => {
    console.log(val)
  }

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
        [{ color: [] }]
      ]
    },
    image: imageHandler
  }

  return (
    <div>
      <InputLabel label={t('lesson.form.name')} onChange={handleChangeName} />
      <ReactQuill
        onChange={handleChangeContent}
        placeholder={'Enter new content here...'}
        modules={modules}
        style={{ height: '300px' }}
      />
    </div>
  )
}

export default ModalCreate
