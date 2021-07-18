import {
  LoadingOutlined,
  PlusOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { message, Modal, Upload } from 'antd'
import Image from 'components/image/Image'
import { IUpload } from 'interfaces/interfaces/IUpload'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import classes from 'styles/SelectImage.module.scss'
import { getImgUrl } from 'utils/Functions'

type Props = {
  visible: boolean
  handleCancel: () => void
  getListUpload: () => void
  listUpload: IUpload[]
  onSelectItem: (name: string) => void
  upload: (file: File, callback: (val: IUpload) => void) => void
  deleteImage: (name: string) => void
}

const SelectImage = ({
  visible,
  handleCancel,
  getListUpload,
  listUpload,
  onSelectItem,
  upload,
  deleteImage
}: Props) => {
  const theme = useSelector((state: AppState) => state.common.theme)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getListUpload()
  }, [getListUpload])

  const handleOk = () => {}

  const handleUpload = (e: any) => {
    upload(e.file, () => {
      setLoading(false)
    })
  }

  const handleDeleteItem = (name: string) => {
    deleteImage(name)
  }

  function beforeUpload(file: File) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )
  return (
    <Modal
      title={'Select image'}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={'80%'}>
      <div className={classes.container}>
        <Upload
          name='file'
          listType='picture-card'
          className='avatar-uploader'
          showUploadList={false}
          customRequest={handleUpload}
          beforeUpload={beforeUpload}>
          {uploadButton}
        </Upload>

        {listUpload.map((item) => (
          <div key={item.id} className={classes.imgContainer}>
            <div
              onClick={() => handleDeleteItem(item.name)}
              style={{ background: theme.PRIMARY_LINEAR_MAIN }}
              className={classes.iconDelete}>
              <DeleteOutlined style={{ color: theme.ICON }} />
            </div>
            <Image
              onClick={() => onSelectItem(item.name)}
              src={getImgUrl(item.name)}
              className={classes.image}
            />
          </div>
        ))}
      </div>
    </Modal>
  )
}

export default SelectImage
