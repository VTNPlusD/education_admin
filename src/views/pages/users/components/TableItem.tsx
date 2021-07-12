import Image from 'components/image/Image'
import { IUser } from 'interfaces/IUser'
import classes from 'styles/UsersManagement.module.scss'
import { lightColors } from 'utils/colors'
import { convertStatusToColor, getImgUrl } from 'utils/Functions'

type Props = {
  user: IUser
  index: number
  handleSelectUser: (id: number) => void
}

const TableItem = ({ user, index, handleSelectUser }: Props) => {
  return (
    <tr
      className='pointer'
      style={stylesWithParam(index.toString()).itemContainer}
      onClick={() => handleSelectUser(user.id)}>
      <td className={classes.pdL8}>
        <Image
          src={getImgUrl(user.imageName)}
          className={classes.imgUserAvatar}
        />
      </td>
      <td>{user.fullname} </td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.phone} </td>
      <td>
        <div
          style={stylesWithParam(user.status).userStatus}
          className={classes.userStatus}
        />
      </td>
    </tr>
  )
}

const stylesWithParam = (val: string) => {
  const obj = {
    userStatus: {},
    itemContainer: {}
  }
  obj.userStatus = {
    background: convertStatusToColor(val),
    marginLeft: 8
  }
  obj.itemContainer = {
    backgroundColor:
      Number(val) % 2 === 0 ? lightColors.PRIMARY_BACKGROUND : '#FFF',
    height: 45
  }
  return obj
}

export default TableItem
