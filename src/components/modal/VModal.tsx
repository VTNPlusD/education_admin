import { Modal } from 'antd'

type Props = {
  isModalVisible: boolean
  title: string
  Content: React.ComponentType
  handleOk?: () => void
  handleCancel?: () => void
}

const VModal = ({
  isModalVisible,
  title,
  handleOk,
  handleCancel,
  Content
}: Props) => {
  return (
    <Modal
      title={title}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}>
      <Content />
    </Modal>
  )
}

export default VModal
