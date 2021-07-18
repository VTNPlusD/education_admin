import { PlusOutlined } from '@ant-design/icons'
import { Select, Tag } from 'antd'
import Image from 'components/image/Image'
import InputLabel from 'components/inputLabel/InputLabel'
import SelectImageContainer from 'containers/SelectImageContainer'
import { EUserStatus } from 'interfaces/enums/EUserStatus'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from 'styles/ClassesManagement.module.scss'
import { getImgUrl } from 'utils/Functions'

type Props = {
  name: string
  type: string
  image: string
  order?: number
  active: boolean
  handleChangName: (val: string) => void
  handleChangType: (val: string) => void
  handleChangeImage: (name: string) => void
}

const ModalUpdateClass = ({
  name,
  type,
  image,
  order,
  active,
  handleChangName,
  handleChangeImage,
  handleChangType
}: Props) => {
  const { t } = useTranslation()
  const [showSelecImage, setShowSelectImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [activeVal, setActiveVal] = useState<string[]>([
    active ? EUserStatus.ACTIVE : EUserStatus.BLOCK
  ])

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

  const options = [{ value: EUserStatus.ACTIVE }, { value: EUserStatus.BLOCK }]

  function tagRender(props: any) {
    const { label, closable, onClose } = props
    const onPreventMouseDown = (event: any) => {
      event.preventDefault()
      event.stopPropagation()
    }
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}>
        {label}
      </Tag>
    )
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
        onChange={handleChangType}
      />
      <p>Active</p>
      <Select
        showArrow
        tagRender={tagRender}
        value={activeVal}
        onChange={(val) => setActiveVal(val)}
        style={{ ...styles.margin, ...{ width: '100%' } }}
        options={options}
      />{' '}
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
