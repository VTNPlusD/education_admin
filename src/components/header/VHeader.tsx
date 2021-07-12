import {
  BellOutlined,
  MailOutlined,
  PoweroffOutlined,
  SearchOutlined,
  SwitcherOutlined
} from '@ant-design/icons'
import { Dropdown, Input, Menu } from 'antd'
import VButtonContainer from 'containers/VButtonContainer'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classes from 'styles/VHeader.module.scss'
import {
  colors,
  dangerColors,
  IColors,
  lightColors,
  purpleColors
} from 'utils/colors'
import { changeCSS } from 'utils/Functions'

type Props = {
  handleLogout: () => void
  theme: IColors
  handleChangeTheme: (theme: IColors) => void
}

const VHeader = ({ handleLogout, theme, handleChangeTheme }: Props) => {
  const { t } = useTranslation()

  useEffect(() => {
    changeCSS(theme)
  }, [theme])

  let delayTimer: any
  const onSearch = (val: string) => {
    clearTimeout(delayTimer)
    delayTimer = setTimeout(function () {}, 1000)
  }

  const onLogout = () => {
    handleLogout()
  }

  const onChangeTheme = (e: any) => {
    switch (e.key) {
      case '0':
        handleChangeTheme(lightColors)
        break
      case '1':
        handleChangeTheme(purpleColors)
        break
      case '2':
        handleChangeTheme(dangerColors)
        break
      default:
        break
    }
  }

  const menu = (
    <Menu className={classes.menuLogout}>
      <Menu.Item key='0'>
        <p>English</p>
      </Menu.Item>
      <Menu.Item key='1'>
        <p>VietNam</p>
      </Menu.Item>
      <Menu.Item key='3' onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  )

  const menuTheme = (
    <Menu className={classes.menuLogout}>
      <Menu.Item key='1' onClick={onChangeTheme}>
        <VButtonContainer
          title='Purple'
          color={colors.PRIMARY_LINEAR_PURPLE}
          textColor={'#FFF'}
          style={styles.widthIcon}
        />
      </Menu.Item>
      <Menu.Item key='2' onClick={onChangeTheme}>
        <VButtonContainer
          title='Danger'
          color={colors.PRIMARY_LINEAR_DANGER}
          textColor={'#FFF'}
          style={styles.widthIcon}
        />
      </Menu.Item>
      <Menu.Divider />
    </Menu>
  )
  return (
    <div
      className={classes.container}
      style={{ background: theme.PRIMARY_LINEAR_MAIN }}>
      <div className={classes.searchContainer}>
        <SearchOutlined
          className={classes.iconSearch}
          style={{ color: theme.ICON }}
        />
        <Input
          className={classes.inputSearch}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={t('header.searchTxt')}
          bordered={false}
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
        <MailOutlined
          className={classes.iconNoti}
          style={{ color: theme.ICON }}
        />
      </div>
      <div>
        <BellOutlined
          className={classes.iconNoti}
          style={{ color: theme.ICON }}
        />
      </div>
      <Dropdown
        overlay={menuTheme}
        trigger={['click']}
        placement='bottomCenter'>
        <SwitcherOutlined
          className={classes.iconNoti}
          style={{ color: theme.ICON }}
        />
      </Dropdown>
      <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
        <PoweroffOutlined
          className={classes.iconNoti}
          style={{ color: theme.ICON }}
        />
      </Dropdown>
    </div>
  )
}

const styles = {
  widthIcon: { minWidth: 75 }
}

export default VHeader
