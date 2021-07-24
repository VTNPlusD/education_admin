import { Modal } from 'antd'

type Props = {
  visible: boolean
  title: string
  content: any
  handleOk?: () => void
  handleCancel?: () => void
}

const VModal = ({ visible, title, handleOk, handleCancel, content }: Props) => {
  return (
    <Modal
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}>
      {content}
    </Modal>
  )
}

export default VModal
