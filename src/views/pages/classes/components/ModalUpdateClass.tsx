import { PlusOutlined } from '@ant-design/icons'
import ActiveSelect from 'components/activeSelect/ActiveSelect'
import Image from 'components/image/Image'
import InputLabel from 'components/inputLabel/InputLabel'
import SelectImageContainer from 'containers/SelectImageContainer'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from 'styles/ClassesManagement.module.scss'
import { getImgUrl } from 'utils/Functions'

type Props = {
  name: string
  type: string
  image: string
  order: number
  active: boolean
  handleChangName: (val: string) => void
  handleChangType: (val: string) => void
  handleChangeOrder: (val: number) => void
  handleChangeImage: (val: string) => void
  handleChangeActive: (val: boolean) => void
}

const ModalUpdateClass = ({
  name,
  type,
  image,
  order,
  active,
  handleChangName,
  handleChangeImage,
  handleChangeOrder,
  handleChangType,
  handleChangeActive
}: Props) => {
  const { t } = useTranslation()
  const [showSelecImage, setShowSelectImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    setSelectedImage(image)
  }, [image])

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

  const onChangeActive = (val: boolean) => {
    handleChangeActive(val)
  }

  return (
    <div>
      <SelectImageContainer
        onSelectItem={handleSelectItem}
        visible={showSelecImage}
        handleCancel={() => setShowSelectImage(false)}
      />
      <InputLabel
        value={name}
        label={t('classes.form.name')}
        onChange={handleChangName}
      />
      <InputLabel
        value={type}
        label={t('classes.type')}
        onChange={handleChangType}
      />
      <InputLabel
        value={order?.toString()}
        label={t('classes.order')}
        type='number'
        onChange={(val) => handleChangeOrder(parseInt(val))}
      />
      <ActiveSelect active={active} handleChangeActive={onChangeActive} />
      <p>Select Icon</p>
      <PlusOutlined
        onClick={handleChangIcon}
        className={classes.iconUpload}
        style={styles.margin}
      />
      <div style={styles.imgContainer}>
        <Image src={getImgUrl(selectedImage)} className={classes.img} />
      </div>
    </div>
  )
}

const styles = {
  margin: { marginTop: 8, marginBottom: 8 },
  imgContainer: { display: 'flex', justifyContent: 'center' }
}
export default ModalUpdateClass
