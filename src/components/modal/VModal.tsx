import { Modal } from 'antd'

type Props = {
  isModalVisible: boolean
  title: string
  content: any
  handleOk?: () => void
  handleCancel?: () => void
}

const VModal = ({
  isModalVisible,
  title,
  handleOk,
  handleCancel,
  content
}: Props) => {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}>
      {content}
    </Modal>
  )
}

export default VModal
