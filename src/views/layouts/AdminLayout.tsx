import { NotificationOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import classes from 'styles/AdminLayout.module.scss'
import { ADMIN_ROUTE, routes } from 'views/routes'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const getContentRoute = (
  <Switch>
    {routes.map((route) => (
      <Route
        path={ADMIN_ROUTE.concat(route.path)}
        component={route.component}
        key={route.id}
      />
    ))}
  </Switch>
)
const AdminLayout = () => {
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
    <Layout style={styles.container}>
      <Sider width={260}>
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

      <Layout>
        <Header
          style={{
            backgroundColor: '#FFF',
            backgroundImage: 'linear-gradient(to right, #ffbf96, #fe7096)'
          }}
        />
        <Layout style={styles.contentLayout}>
          <Content className='site-layout-background' style={styles.content}>
            {getContentRoute}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

const styles = {
  container: { height: '100%' },
  logo: { marginTop: 8, height: 56 },
  menu: {height: '100%', paddingLeft:8, paddingRight: 8},
  avatarContainer: { height: 84 },
  itemRoute: { height: 50 },
  contentLayout: { padding: '0 16px 16px' },
  content: {
    padding: 16,
    margin: 0,
    minHeight: 280
  }
}

export default AdminLayout
