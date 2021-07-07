import i18n from 'configs/i18n'
import ClassesManagementContainer from 'containers/ClassesManagementContainer'
import UsersManagementContainer from 'containers/UsersManagementContainer'
import {
  ClassesManagementIcon,
  DashboardIcon,
  UsersManagementIcon
} from './IconRoutes'
import Dashboard from './pages/Dashboard'
import UserDetail from './pages/users/UserDetail'

export const ADMIN_ROUTE = '/admin'
const routes = [
  {
    id: 1,
    title: i18n.t('sideBar.dashboard.txtDashboard'),
    icon: DashboardIcon(),
    path: '/dashboard',
    component: Dashboard
  },
  {
    id: 2,
    title: i18n.t('sideBar.usersManagement.txtUsersManagement'),
    icon: UsersManagementIcon(),
    path: '/users-management',
    component: UsersManagementContainer
  },
  {
    id: 3,
    title: i18n.t('sideBar.classesManagement.txtClassesManagement'),
    icon: ClassesManagementIcon(),
    path: '/classes-management',
    component: ClassesManagementContainer
  },
  {
    id: 4,
    title: 'Subroute',
    // icon: <UserOutlined />,
    path: '/subjects-management',
    subRoutes: [
      {
        id: 41,
        title: 'Subroute 1',
        // icon: <UserOutlined />,
        path: '/classes1-management'
      },
      {
        id: 42,
        title: 'Subroute 2',
        // icon: <UserOutlined />,
        path: '/classes2-management'
      }
    ]
  },
]

const childrenRoutes = [
  {
    id: 1,
    title: "Users",
    path: '/users-management/:id',
    component: UserDetail
  },
]

export { routes, childrenRoutes }
