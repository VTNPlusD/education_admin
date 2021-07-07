import { IUser } from 'interfaces/IUser'
import classes from 'styles/UsersManagement.module.scss'
import { colors } from 'utils/colors'
import { convertStatusToColor } from 'utils/Functions'

type Props = {
  user: IUser
  index: number
  handleSelectUser: (id: number) => void
}

const TableItem = ({ user, index, handleSelectUser }: Props) => {
  return (
    <tr
      style={stylesWithParam(index).itemContainer}
      onClick={() => handleSelectUser(user.id)}>
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
  )
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

export default TableItem
