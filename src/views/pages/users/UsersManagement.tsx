import HeaderRoute from 'components/headerRoute/HeaderRoute'
import { EUserStatus } from 'interfaces/EUserStatus'
import { IUser } from 'interfaces/IUser'
import { useEffect } from 'react'
import classes from 'styles/UsersManagement.module.scss'
import { colors } from 'utils/colors'
import { convertStatusToColor } from 'utils/Functions'
import { useTranslation } from 'react-i18next'
import { UserOutlined } from '@ant-design/icons'
import TableItem from './TableItem'
import { useHistory } from 'react-router'
import { ADMIN_ROUTE, routesName } from 'views/routes'

type Props = {
  getUsersList: () => void
  usersList: IUser[]
}

const UsersManagement = ({ getUsersList, usersList }: Props) => {
  const { t } = useTranslation()
  const history = useHistory()

  useEffect(() => {
    getUsersList()
  }, [getUsersList])

  const handleSelectUser = (id: number) => {
    history.push(
      ADMIN_ROUTE.concat(
        routesName.USER_DETAIL.concat('/').concat(id.toString())
      )
    )
  }

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
        title={t('sideBar.usersManagement.txtUsersManagement')}
        icon={<UserOutlined style={styles.iconHeader} />}
      />
      <table className={classes.tableContainer}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th> {t('users.user')} </th>
            <th> {t('users.fullname')} </th>
            <th> {t('users.username')} </th>
            <th> {t('users.email')} </th>
            <th> {t('users.phone')} </th>
            <th> {t('users.status')} </th>
          </tr>
        </thead>
        <tbody className={classes.tableContainer}>
          {usersList.map((user, index) => (
            <TableItem
              key={user.id}
              user={user}
              index={index}
              handleSelectUser={handleSelectUser}
            />
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
    backgroundColor: val % 2 === 0 ? colors.PRIMARY_GRAY : '#FFF',
    height: 45
  }
  return obj
}

export default UsersManagement
