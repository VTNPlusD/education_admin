import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { DatePicker, Upload } from 'antd'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import Image from 'components/image/Image'
import InputLabel from 'components/inputLabel/InputLabel'
import VModal from 'components/modal/VModal'
import VButtonContainer from 'containers/VButtonContainer'
import { EUserStatus } from 'interfaces/enums/EUserStatus'
import { IUser } from 'interfaces/interfaces/IUser'
import moment, { Moment } from 'moment'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router'
import { IUpdateUserById } from 'services/requests/IUpdateUserById'
import classes from 'styles/DetailUser.module.scss'
import { colors, IColors } from 'utils/colors'
import { getImgUrl } from 'utils/Functions'
import ModalBlock from './components/ModalBlock'
import ModalDelete from './components/ModelDelete'
import SelectStatus from './components/SelectStatus'

function getBase64(img: any, callback: any) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

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
  updateUserById: (user: IUpdateUserById) => void
  upload: (file: any, callback: any) => void
  theme: IColors
}

const UserDetail = ({
  match,
  userDetail,
  getUserById,
  updateUserById,
  upload,
  theme
}: RouteComponentProps & Props) => {
  const id = match.params.id
  const { t } = useTranslation()

  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [birthday, setBirthday] = useState<Moment>()
  const [avatar, setAvatar] = useState('')
  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const [isShowModalBlock, setIsShowModalBlock] = useState(false)

  useEffect(() => {
    setFullname(userDetail.fullname)
    setUsername(userDetail.username)
    setEmail(userDetail.email)
    setPhone(userDetail.phone)
    setBirthday(moment(userDetail.birthday))
    setAvatar(getImgUrl(userDetail.imageName))
  }, [userDetail])

  useEffect(() => {
    if (id) {
      getUserById(id)
    }
  }, [id, getUserById])

  const handleChangeFullname = (value: string) => {
    setFullname(value)
  }
  const handleChangeUsername = (value: string) => {
    setUsername(value)
  }
  const handleChangeEmail = (value: string) => {
    setEmail(value)
  }
  const handleChangePhone = (value: string) => {
    setPhone(value)
  }
  const handleChangeBirthday = (value: Moment | null) => {
    if (value) setBirthday(value)
  }
  const handleUpdate = () => {
    const date = moment(birthday).toDate()
    const user: IUpdateUserById = { id, fullname, email, phone, birthday: date }
    updateUserById(user)
  }

  const handleDeleteBtn = () => {
    setIsShowModalDelete(true)
  }

  const handleOkDelete = () => {
    setIsShowModalDelete(false)
  }

  const handleCancelDelete = () => {
    setIsShowModalDelete(false)
  }

  const handleBlockBtn = () => {
    setIsShowModalBlock(true)
  }

  const handleOkBlock = () => {
    setIsShowModalBlock(false)
  }

  const handleCancelBlock = () => {
    setIsShowModalBlock(false)
  }

  const handleUpdateStatus = (status: string) => {
    const user: IUpdateUserById = { id, status }
    updateUserById(user)
  }

  const handleChangeUpload = (info: any) => {
    // Get this url from response in real world.
    const file = info.file.originFileObj

    upload(file, (result: any) => {
      console.log('call back', result)
    })

    getBase64(file, (imageUrl: string) => setAvatar(imageUrl))
  }

  const _renderAvatar = () => {
    return (
      <Upload
        className={classes.uploadContainer}
        onChange={handleChangeUpload}
        customRequest={() => null}
        multiple={false}
        maxCount={1}
        itemRender={() => <></>}>
        <div className={classes.avatarContainer}>
          <Image src={avatar} className={classes.imgAvatar} />
          <div className={classes.editAvatarContainer}>
            <EditOutlined
              style={{ ...styles.iconEdit, ...{ color: theme.PRIMARY_MAIN } }}
            />
          </div>
        </div>
      </Upload>
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
          disabled
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
          value={birthday}
          format='DD-MM-YYYY'
          style={styles.birthdayInput}
          placeholder='1996-02-25'
          allowClear={false}
          onChange={handleChangeBirthday}
        />
        <VButtonContainer
          onClick={handleUpdate}
          title={t('sideBar.usersManagement.btnUpdate')}
          type='primary'
        />
      </div>
    )
  }

  const _renderRightInfo = () => {
    return (
      <div className={classes.infoRight}>
        <div className={classes.btnInfoRight}>
          <VButtonContainer
            onClick={() => handleDeleteBtn()}
            title={t('sideBar.usersManagement.btnDelete')}
            color={colors.PRIMARY_LINEAR_DANGER}
            style={{ marginRight: 16 }}
          />
          <VButtonContainer
            onClick={() => handleBlockBtn()}
            title={t('sideBar.usersManagement.btnBlock')}
            color={colors.PRIMARY_LINEAR_DARK}
          />
        </div>
        <SelectStatus
          status={userDetail.status || EUserStatus.ACTIVE}
          handleUpdateStatus={handleUpdateStatus}
        />
      </div>
    )
  }

  return (
    <div>
      <VModal
        title={t('sideBar.usersManagement.deleteUser')}
        isModalVisible={isShowModalDelete}
        Content={ModalDelete}
        handleOk={handleOkDelete}
        handleCancel={handleCancelDelete}
      />
      <VModal
        title={t('sideBar.usersManagement.blockUser')}
        isModalVisible={isShowModalBlock}
        Content={ModalBlock}
        handleOk={handleOkBlock}
        handleCancel={handleCancelBlock}
      />
      <HeaderRoute title={userDetail.fullname} Icon={UserOutlined} />
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
  iconEdit: { width: 15, height: 15 },
  birthdayInput: {
    marginTop: 8,
    marginBottom: 16
  },
  birthday: { fontWeight: 500 }
}

export default UserDetail
