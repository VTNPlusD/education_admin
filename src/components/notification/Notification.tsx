import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { notification } from 'antd'
import { NotificationPlacement } from 'antd/lib/notification'
import { ERROR_CODES } from 'interfaces/ErrorTypes'
import { INotification } from 'interfaces/INotification'
import React, { useEffect } from 'react'

const Context = React.createContext({ name: 'Default' })

type Props = {
  notifications?: INotification
}

const Notification = ({ notifications }: Props) => {
  const [api, contextHolder] = notification.useNotification()

  useEffect(() => {
    if (notifications) {
      openNotification('topRight')
    }
  }, [notifications])

  const _renderType = () => {
    switch (notifications?.notiType) {
      case ERROR_CODES.UNAUTHENTICATED:
        return <CloseCircleOutlined style={{ color: 'red' }} />
      case ERROR_CODES.ERR_INTERNET_DISCONNECTED:
        return <CloseCircleOutlined style={{ color: 'red' }} />
      default:
        return <CheckCircleOutlined style={{ color: 'green' }} />
    }
  }

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      message: notifications?.title || '',
      description: <Context.Consumer>{({ name }) => name}</Context.Consumer>,
      placement,
      icon: _renderType()
    })
  }
  return (
    <Context.Provider value={{ name: notifications?.message || '' }}>
      {contextHolder}
    </Context.Provider>
  )
}

export default Notification
