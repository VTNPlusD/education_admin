import {
  SearchOutlined,
  BellOutlined,
  MailOutlined,
  PoweroffOutlined
} from '@ant-design/icons'
import { Input, Menu, Dropdown } from 'antd'
import { CSSProperties } from 'react'
import { useTranslation } from 'react-i18next'
import classes from 'styles/VHeader.module.scss'
import { colors } from 'utils/colors'

type Props = {
  handleLogout: () => void
}

const VHeader = ({ handleLogout }: Props) => {
  const { t } = useTranslation()

  let delayTimer: any
  const onSearch = (val: string) => {
    clearTimeout(delayTimer)
    delayTimer = setTimeout(function () {}, 1000)
  }

  const onLogout = () => {
    handleLogout()
  }

  const menu = (
    <Menu style={styles.menuLogout}>
      <Menu.Item key='0' style={styles.item}>
        <p>English</p>
      </Menu.Item>
      <Menu.Item key='1'>
        <p>VietNam</p>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3' onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={classes.container} style={styles.bgHeader}>
      <div className={classes.searchContainer}>
        <SearchOutlined
          className={classes.iconSearch}
          style={{ color: '#fff' }}
        />
        <Input
          className={classes.inputSearch}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={t('header.searchTxt')}
          bordered={false}
          style={{ color: '#FFF' }}
        />
      </div>
      <div className={classes.iconContainer}>
        <div className={classes.avatarContainer}>
          <img
            className={classes.avatarImg}
            alt=''
            src='https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/faces/face1.jpg'
          />
        </div>
      </div>
      <div>
        <MailOutlined style={styles.iconNoti} />
      </div>
      <div>
        <BellOutlined style={styles.iconNoti} />
      </div>
      <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
          <PoweroffOutlined style={styles.iconNoti} />
      </Dropdown>
    </div>
  )
}

const styles = {
  iconNoti: {
    fontSize: '1.25rem',
    color: colors.ICON_GRAY,
    marginRight: 16,
    marginLeft: 16,
    cursor: 'pointer'
  },
  bgHeader: {
    background: colors.PRIMARY_LINEAR_MAIN
  },
  menuLogout: {
    paddingLeft: 16,
    paddingRight: 16
  },
  item: {
    '&:hover': {
      backgroundColor: 'red'
    }
  } as CSSProperties
}

export default VHeader
