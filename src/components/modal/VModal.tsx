import { Modal } from 'antd'
import VButton from 'components/button/VButton'

type Props = {
  visible: boolean
  title: string
  content: any
  handleOk?: () => void
  handleCancel?: () => void
}

const VModal = ({ visible, title, handleOk, handleCancel, content }: Props) => {
  const Footer = () => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <VButton title={'OK'} onClick={handleOk} />
      <VButton
        title={'Cancel'}
        onClick={handleCancel}
        style={{ background: '#FFF', border: '1px solid lightgray' }}
        textColor={'#000000d9'}
      />
    </div>
  )

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={handleCancel}
      footer={<Footer />}>
      {content}
    </Modal>
  )
}

export default VModal
