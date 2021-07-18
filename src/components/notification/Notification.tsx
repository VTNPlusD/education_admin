import { CheckCircleOutlined } from '@ant-design/icons'
import * as antdNotification from 'antd'
import { ESuccessType } from 'interfaces/enums/ESuccessType'
import { INotification } from 'interfaces/interfaces/INotification'
import React, { useEffect } from 'react'

const Context = React.createContext({ name: 'Default' })

type Props = {
  notification?: INotification
}

const Notification = ({ notification }: Props) => {
  const [api, contextHolder] = antdNotification.notification.useNotification()

  useEffect(() => {
    if (notification) {
      const _renderType = () => {
        switch (notification?.notiType) {
          case ESuccessType.SUCCESS:
            return <CheckCircleOutlined style={styles.success} />
          default:
            return <CheckCircleOutlined style={styles.error} />
        }
      }

      api.info({
        message: notification?.title || '',
        description: <Context.Consumer>{({ name }) => name}</Context.Consumer>,
        placement: 'topRight',
        icon: _renderType()
      })
    }
  }, [notification, api])

  return (
    <Context.Provider value={{ name: notification?.message || '' }}>
      {contextHolder}
    </Context.Provider>
  )
}

const styles = {
  error: { color: 'red' },
  success: { color: 'green' }
}

export default Notification
