import i18n from 'configs/i18n'
import ClassesManagementContainer from 'containers/ClassesManagementContainer'
import UserDetailContainer from 'containers/UserDetailContainer'
import UsersManagementContainer from 'containers/UsersManagementContainer'
import {
  ClassesManagementIcon,
  DashboardIcon,
  UsersManagementIcon
} from './IconRoutes'
import Dashboard from './pages/Dashboard'

export const ADMIN_ROUTE = '/admin'
export const routesName = {
  DASHBOARD: '/dashboard',
  USERS_MANAGEMENT: '/users-management',
  CLASSES_MANAGEMENT: '/classes-management',
  SUBJECTS_MANAGEMENT: '/subjects-management',
  USER_DETAIL: '/users-management'
}
const routes = [
  {
    id: 1,
    title: i18n.t('sideBar.dashboard.txtDashboard'),
    icon: DashboardIcon(),
    path: routesName.DASHBOARD,
    component: Dashboard
  },
  {
    id: 2,
    title: i18n.t('sideBar.usersManagement.txtUsersManagement'),
    icon: UsersManagementIcon(),
    path: routesName.USERS_MANAGEMENT,
    component: UsersManagementContainer
  },
  {
    id: 3,
    title: i18n.t('sideBar.classesManagement.txtClassesManagement'),
    icon: ClassesManagementIcon(),
    path: routesName.CLASSES_MANAGEMENT,
    component: ClassesManagementContainer
  },
  {
    id: 4,
    title: 'Subroute',
    // icon: <UserOutlined />,
    path: routesName.SUBJECTS_MANAGEMENT,
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
  }
]

const childrenRoutes = [
  {
    id: 1,
    title: 'Users',
    path: routesName.USER_DETAIL.concat('/:id'),
    component: UserDetailContainer
  }
]

export { routes, childrenRoutes }
