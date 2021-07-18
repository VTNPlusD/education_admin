import { PlusOutlined } from '@ant-design/icons'
import Image from 'components/image/Image'
import InputLabel from 'components/inputLabel/InputLabel'
import SelectImageContainer from 'containers/SelectImageContainer'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from 'styles/ClassesManagement.module.scss'
import { getImgUrl } from 'utils/Functions'

type Props = {
  handleChangName: (val: string) => void
  handleChangType: (val: string) => void
  handleChangeImage: (name: string) => void
}

const ModalCreateClass = ({
  handleChangName,
  handleChangeImage,
  handleChangType
}: Props) => {
  const { t } = useTranslation()
  const [showSelecImage, setShowSelectImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    if (selectedImage !== '') handleChangeImage(selectedImage)
  }, [selectedImage, handleChangeImage])

  const handleChangIcon = () => {
    setShowSelectImage(true)
  }

  const handleSelectItem = (name: string) => {
    setSelectedImage(name)
    setShowSelectImage(false)
  }

  return (
    <div>
      <SelectImageContainer
        onSelectItem={handleSelectItem}
        visible={showSelecImage}
        handleCancel={() => setShowSelectImage(false)}
      />
      <InputLabel label={t('classes.form.name')} onChange={handleChangName} />
      <InputLabel label={t('classes.type')} onChange={handleChangType} />
      <p>Select Icon</p>
      <div className={classes.imgContainer}>
        {selectedImage === '' ? (
          <PlusOutlined
            onClick={handleChangIcon}
            className={classes.iconUpload}
          />
        ) : (
          <Image src={getImgUrl(selectedImage)} className={classes.img} />
        )}
      </div>
    </div>
  )
}
export default ModalCreateClass
