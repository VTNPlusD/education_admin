import HeaderRoute from 'components/headerRoute/HeaderRoute'
import { EUserStatus } from 'interfaces/EUserStatus'
import { IUser } from 'interfaces/IUser'
import { useEffect } from 'react'
import classes from 'styles/UsersManagement.module.scss'
import { PRIMARY_GRAY } from 'utils/colors'
import { convertStatusToColor } from 'utils/Functions'
import { useTranslation } from 'react-i18next'
import { UserOutlined } from '@ant-design/icons'

type Props = {
  getUsersList: () => void
  usersList: IUser[]
}

const UsersManagement = ({ getUsersList, usersList }: Props) => {
  const { t } = useTranslation()

  useEffect(() => {
    getUsersList()
  }, [getUsersList])

  const _renderNote = () => {
    const userStatusList = [
      { id: 1, status: EUserStatus.ACTIVE },
      { id: 2, status: EUserStatus.INACTIVE },
      { id: 3, status: EUserStatus.BLOCK }
    ]
    return (
      <div className={classes.userStatusNote}>
        {userStatusList.map((userStatus) => (
          <div key={userStatus.id} className={classes.userStatusNote}>
            <p>{userStatus.status.toLocaleUpperCase()}</p>
            <div
              className={classes.userStatus}
              style={stylesWithParam(userStatus.status).userStatus}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <HeaderRoute
        title={t('sideBar.classesManagement.txtClassesManagement')}
        icon={<UserOutlined style={styles.iconHeader} />}
      />
      <table className={classes.tableContainer}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th> User </th>
            <th> First name </th>
            <th> Username </th>
            <th> Email </th>
            <th> Phone </th>
            <th> Status </th>
          </tr>
        </thead>
        <tbody className={classes.tableContainer}>
          {usersList.map((user, index) => (
            <tr key={user.id} style={stylesWithParam(index).itemContainer}>
              <td className={classes.pdL8}>
                <img
                  className={classes.imgUserAvatar}
                  src='https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
                  alt=''
                />
              </td>
              <td>{user.fullname} </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone} </td>
              <td>
                <div
                  style={stylesWithParam(user.status).userStatus}
                  className={classes.userStatus}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {_renderNote()}
    </div>
  )
}

const styles = {
  iconHeader: {
    color: '#FFF',
    fontSize: 11
  }
}

const stylesWithParam = (val: any) => {
  const obj: any = {}
  obj.userStatus = {
    backgroundColor: convertStatusToColor(val),
    marginLeft: 8
  }
  obj.itemContainer = {
    backgroundColor: val % 2 === 0 ? PRIMARY_GRAY : '#FFF',
    height: 45
  }
  return obj
}

export default UsersManagement
