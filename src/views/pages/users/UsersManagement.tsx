import { UserOutlined } from '@ant-design/icons'
import { Pagination } from 'antd'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import { EUserStatus } from 'interfaces/EUserStatus'
import { IUserList } from 'interfaces/IUserList'
import { CSSProperties, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'
import { IUserListRequest } from 'services/requests/IUserListRequest'
import classes from 'styles/UsersManagement.module.scss'
import { colors } from 'utils/colors'
import { convertStatusToColor } from 'utils/Functions'
import { ADMIN_ROUTE, routesName } from 'views/routes/routes'
import TableItem from './TableItem'

type Props = {
  getUsersList: (request: IUserListRequest) => void
  usersList: IUserList
}

const UsersManagement = ({ getUsersList, usersList }: Props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState<number | undefined>(2)

  useEffect(() => {
    getUsersList({ page: page, limit: limit })
  }, [getUsersList, limit, page])

  useEffect(() => {}, [usersList.totalRecords])

  const handleSelectUser = (id: number) => {
    history.push(
      ADMIN_ROUTE.concat(
        routesName.USER_DETAIL.concat('/').concat(id.toString())
      )
    )
  }
  const handleChangePage = (page: number, pageSize?: number) => {
    setPage(page)
    setLimit(pageSize)
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
          {usersList.content.map((user, index) => (
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
      {usersList.totalRecords > 0 ? (
        <Pagination
          onChange={handleChangePage}
          defaultCurrent={1}
          pageSize={limit}
          total={usersList.totalRecords}
          style={styles.pagination}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

const styles = {
  iconHeader: {
    color: '#FFF',
    fontSize: 11
  },
  pagination: { textAlign: 'center', marginTop: 16 } as CSSProperties
}

const stylesWithParam = (val: string) => {
  const obj = { userStatus: {}, itemContainer: {} }
  obj.userStatus = {
    backgroundColor: convertStatusToColor(val),
    marginLeft: 8
  }
  obj.itemContainer = {
    backgroundColor: Number(val) % 2 === 0 ? colors.PRIMARY_GRAY : '#FFF',
    height: 45
  }
  return obj
}

export default UsersManagement
