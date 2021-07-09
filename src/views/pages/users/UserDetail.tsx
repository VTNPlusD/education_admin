import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import VButton from 'components/button/VButton'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import InputLabel from 'components/inputLabel/InputLabel'
import { IUser } from 'interfaces/IUser'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router'
import classes from 'styles/DetailUser.module.scss'
import { colors } from 'utils/colors'
import { getImgUrl } from 'utils/Functions'

type IdType = {
  id: number
}

type MatchType = {
  params: IdType
}

type Props = {
  userDetail: IUser
  match: MatchType
  getUserById: (id: number) => void
}

const UserDetail = ({
  match,
  userDetail,
  getUserById
}: RouteComponentProps & Props) => {
  const id = match.params.id
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

  const _renderLeftInfo = () => {
    return (
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
        <VButton title={t('sideBar.usersManagement.btnUpdate')} type="primary"/>
      </div>
    )
  }

  const _renderRightInfo = () => {
    return (
      <div className={classes.infoRight}>
        <div className={classes.btnInfoRight}>
          <VButton
            title={t('sideBar.usersManagement.btnDelete')}
            color={colors.PRIMARY_LINEAR_DANGER}
            style={{marginRight: 16}}
          />
          <VButton
            title={t('sideBar.usersManagement.btnBlock')}
            color={colors.PRIMARY_LINEAR_DARK}
          />
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
        {_renderLeftInfo()}
        {_renderRightInfo()}
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
    marginTop: 8,
    marginBottom: 16
  },
  birthday: { fontWeight: 500 }
}

export default UserDetail
