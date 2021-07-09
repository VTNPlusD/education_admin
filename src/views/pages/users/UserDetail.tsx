import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import InputLabel from 'components/inputLabel/InputLabel'
import { IUser } from 'interfaces/IUser'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classes from 'styles/DetailUser.module.scss'
import { colors } from 'utils/colors'
import { getImgUrl } from 'utils/Functions'
import moment from 'moment'

type Props = {
  match: any
  userDetail: IUser
  getUserById: (id: number) => void
}

const UserDetail = ({ match, userDetail, getUserById }: Props) => {
  const id = match.params?.id
  const { t } = useTranslation()
  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthday, setBirthday] = useState<Date>()
  const [avatar, setAvatar] = useState('')

  useEffect(() => {
    setFullname(userDetail.fullname)
    setUsername(userDetail.username)
    setEmail(userDetail.email)
    setPhone(userDetail.phone)
    setBirthday(userDetail.birthday)
    setAvatar(userDetail.imageName)
  }, [userDetail])

  useEffect(() => {
    if (id) {
      getUserById(id)
    }
  }, [id, getUserById])

  const handleChangeFullname = (value: string) => {
    // console.log(value)
  }
  const handleChangeUsername = (value: string) => {
    // console.log(value)
  }
  const handleChangeEmail = (value: string) => {
    // console.log(value)
  }
  const handleChangePhone = (value: string) => {
    // console.log(value)
  }

  const _renderAvatar = () => {
    return (
      <div className={classes.avatarContainer}>
        <img src={getImgUrl(avatar)} className={classes.imgAvatar} alt='' />
        <div className={classes.editAvatarContainer}>
          <EditOutlined style={styles.iconEdit} />
        </div>
      </div>
    )
  }

  return (
    <div>
      <HeaderRoute
        title={userDetail.fullname}
        icon={<UserOutlined style={styles.iconHeader} />}
      />
      <div className={classes.infoContainer}>
        <div className={classes.infoLeft}>
          {_renderAvatar()}
          <InputLabel
            value={fullname}
            label={t('users.fullname')}
            placeholder='Nguyen Van A'
            onChange={handleChangeFullname}
          />
          <InputLabel
            value={username}
            label={t('users.username')}
            placeholder='nguyenvan'
            onChange={handleChangeUsername}
          />
          <InputLabel
            value={email}
            label={t('users.email')}
            placeholder='nguyenvana@gmail.com'
            onChange={handleChangeEmail}
          />
          <InputLabel
            value={phone}
            label={t('users.phone')}
            placeholder='0346718110'
            onChange={handleChangePhone}
          />
          <p style={styles.birthday}>{t('users.birthday')}</p>
          <DatePicker
            value={moment(birthday)}
            format='YYYY-MM-DD HH:mm:ss'
            style={styles.birthdayInput}
            placeholder='1996-02-25'
          />
        </div>
        <div className={classes.infoRight} />
      </div>
    </div>
  )
}

const styles = {
  iconHeader: {
    color: '#FFF',
    fontSize: 11
  },
  iconEdit: { width: 15, height: 15, color: colors.PRIMARY_MAIN },
  birthdayInput: {
    marginTop: 8
  },
  birthday: { fontWeight: 500 }
}

export default UserDetail
