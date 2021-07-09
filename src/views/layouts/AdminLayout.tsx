import { NotificationOutlined } from '@ant-design/icons'
import Notification from 'components/notification/Notification'
import { Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import classes from 'styles/AdminLayout.module.scss'
import { ADMIN_ROUTE, childrenRoutes, routes } from 'views/routes'
import { INotification } from 'interfaces/INotification'
import { colors } from 'utils/colors'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const getContentRoute = (
  <Switch>
    {routes.map((route) => (
      <Route
        exact
        path={ADMIN_ROUTE.concat(route.path)}
        component={route.component}
        key={route.id}
      />
    ))}
    {childrenRoutes.map((route) => (
      <Route
        path={ADMIN_ROUTE.concat(route.path)}
        component={route.component}
        key={route.id}
      />
    ))}
  </Switch>
)

type Props = {
  notification: INotification
}

const AdminLayout = ({ notification }: Props) => {
  const history = useHistory()
  const location = useLocation()
  const [defaultSelectedRoute, setDefaultSelectedRoute] = useState(1)

  useEffect(() => {
    routes.forEach((route) => {
      if (ADMIN_ROUTE.concat(route.path) === location.pathname) {
        setDefaultSelectedRoute(route.id)
      }
    })
  }, [location.pathname])

  const handleClickLogo = () => {
    window.location.replace('/admin')
  }

  const handleSwitchRoute = (path: string) => {
    history.push(ADMIN_ROUTE.concat(path))
  }

  const _renderItemRoute = () => {
    return routes.map((route) => {
      return route.subRoutes && route.subRoutes.length > 0 ? (
        <SubMenu
          key={route.id}
          icon={<NotificationOutlined />}
          title={route.title}>
          {route.subRoutes.map((subRoute) => (
            <Menu.Item
              key={subRoute.id}
              onClick={() => handleSwitchRoute(subRoute.path)}>
              {subRoute.title}
            </Menu.Item>
          ))}
        </SubMenu>
      ) : (
        <Menu.Item
          key={route.id}
          icon={route.icon}
          style={styles.itemRoute}
          onClick={() => handleSwitchRoute(route.path)}>
          {route.title}
        </Menu.Item>
      )
    })
  }

  return (
    <div style={{ height: '100%' }}>
      <Notification notifications={notification} />
      <Layout style={styles.container}>
        <Sider
          width={260}
          style={{
            height: '100%',
            overflowX: 'auto',
            backgroundColor: '#fff'
          }}>
          <Menu
            mode='inline'
            selectedKeys={[defaultSelectedRoute.toString()]}
            style={styles.menu}>
            <Menu.Item key='logo' style={styles.logo} onClick={handleClickLogo}>
              <div className={classes.logoContainer}>
                <img
                  className={classes.logo}
                  src='https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/logo.svg'
                  alt=''
                />
              </div>
            </Menu.Item>
            <Menu.Item key='0' style={styles.avatarContainer}>
              <div className={classes.avatarImgContainer}>
                <img
                  className={classes.avatar}
                  src='https://www.bootstrapdash.com/demo/purple-admin-free/assets/images/faces/face1.jpg'
                  alt=''
                />
                <div className={classes.avtTitleContainer}>
                  <div className={classes.userName}>David Grey.H</div>
                  <div className={classes.userRole}>Admin</div>
                </div>
              </div>
            </Menu.Item>
            {_renderItemRoute()}
          </Menu>
        </Sider>
        <div className={classes.contentContainer}>
          <Layout>
            <Header style={{ backgroundImage: colors.PRIMARY_LINEAR_MAIN }} />
            <Layout style={styles.contentLayout}>
              <Content
                className='site-layout-background'
                style={styles.content}>
                {getContentRoute}
              </Content>
            </Layout>
          </Layout>
        </div>
      </Layout>
    </div>
  )
}

const styles = {
  container: { height: '100%' },
  logo: { marginTop: 8, height: 56 },
  menu: { height: '100%', paddingLeft: 8, paddingRight: 8 },
  avatarContainer: { height: 84 },
  itemRoute: { height: 50 },
  contentLayout: { padding: '0 16px 16px' },
  content: {
    margin: 0,
    marginTop: 16
  }
}

export default AdminLayout
