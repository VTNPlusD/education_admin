import { HomeFilled } from '@ant-design/icons'
import HeaderRoute from 'components/headerRoute/HeaderRoute'
import VButtonContainer from 'containers/VButtonContainer'
import { useTranslation } from 'react-i18next'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <div>
      <HeaderRoute
        title={t('sideBar.dashboard.txtDashboard')}
        Icon={HomeFilled}
      />
      <VButtonContainer title='Change' />
    </div>
  )
}

export default Dashboard
