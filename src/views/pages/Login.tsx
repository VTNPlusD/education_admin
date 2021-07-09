import { GlobalOutlined } from '@ant-design/icons'
import {
  Checkbox,
  DatePicker,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
  Select
} from 'antd'
import VButton from 'components/button/VButton'
import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ILoginRequest } from 'services/requests/ILoginRequest'
import styles from 'styles/Login.module.scss'

const { Option } = Select

type Props = {
  handleLogin: (loginRequest: ILoginRequest) => void
  isLoading: boolean
}

type LayoutType = Parameters<typeof Form>[0]['layout']

const Login = ({ handleLogin, isLoading = false }: Props) => {
  console.log(isLoading)
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tab, setTab] = useState(1)
  const formLayout: LayoutType = 'vertical'

  const config = {
    rules: [
      {
        type: 'object' as const,
        required: true,
        message: t('validation.loginForm.time')
      }
    ]
  }

  const layout = {
    layout: formLayout,
    labelCol: { span: 24 },
    wrapperCol: { span: 24 }
  }

  const onFinish = () => {
    const loginRequest: ILoginRequest = {
      username: username,
      password: password
    }
    handleLogin(loginRequest)
  }

  const changeLanguage = (e: RadioChangeEvent) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang)
    e.preventDefault()
  }

  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
    e.preventDefault()
  }

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    e.preventDefault()
  }

  const handleChangeRegister = () => {
    setTab(2)
  }

  const handleChangeLogin = () => {
    setTab(1)
  }

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select style={{ width: 70 }}>
        <Option value='86'>+84</Option>
      </Select>
    </Form.Item>
  )

  const _renderLanguage = () => {
    return (
      <div className={`change-locale ${styles.change_locale}`}>
        <span style={{ marginRight: 16 }}>
          <GlobalOutlined /> {t('common.lang')}{' '}
        </span>
        <Radio.Group value={language} onChange={changeLanguage}>
          <Radio.Button key='en' value={'en'}>
            English
          </Radio.Button>
          <Radio.Button key='vi' value={'vi'}>
            Việt Nam
          </Radio.Button>
        </Radio.Group>
      </div>
    )
  }

  const _renderLogin = () => {
    return (
      <Form {...layout} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label={t('loginScreen.username')}
          name='username'
          rules={[
            {
              required: true,
              message: t('validation.loginForm.notEmptyUser')
            }
          ]}>
          <Input value={username} onChange={onChangeUser} />
        </Form.Item>
        <Form.Item
          label={t('loginScreen.pass')}
          name='password'
          rules={[
            {
              required: true,
              message: t('validation.loginForm.notEmptyPass')
            }
          ]}>
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>
        <div className={styles.remember_container}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='c'>{t('loginScreen.remember')}</Checkbox>
          </Form.Item>
          <span onClick={handleChangeRegister} className='c'>
            {t('loginScreen.register')}
          </span>
        </div>
        <div className='text-align-center'>
          <VButton
            isLoading={isLoading}
            title={t('loginScreen.loginBtn')}
          />
        </div>
      </Form>
    )
  }

  const _renderRegister = () => {
    return (
      <Form {...layout}>
        <Form.Item
          label={t('loginScreen.username')}
          name='username'
          rules={[
            {
              required: true,
              message: t('validation.loginForm.notEmptyUser')
            }
          ]}>
          <Input value={username} onChange={onChangeUser} />
        </Form.Item>
        <Form.Item
          label={t('loginScreen.pass')}
          name='password'
          rules={[
            {
              required: true,
              message: t('validation.loginForm.notEmptyPass')
            }
          ]}>
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item
          name='phone'
          label={t('loginScreen.phoneNumber')}
          rules={[
            { required: true, message: t('validation.loginForm.phone') }
          ]}>
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name='date-picker'
          label={t('loginScreen.birthday')}
          {...config}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <div className={styles.remember_container}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>{t('loginScreen.termsOfUse')}</Checkbox>
          </Form.Item>
          <span onClick={handleChangeLogin} className='c'>
            {t('loginScreen.loginBtn')}
          </span>
        </div>
        <div className='text-align-center'>
          <VButton
            isLoading={isLoading}
            title={t('loginScreen.register')}
          />
        </div>
      </Form>
    )
  }

  const _renderTab = () => {
    switch (tab) {
      case 1:
        return _renderLogin()
      case 2:
        return _renderRegister()
      default:
        return _renderLogin()
    }
  }

  return (
    <div className={styles.login_page}>
      <div className={styles.login_container}>
        {_renderLanguage()}
        {_renderTab()}
      </div>
    </div>
  )
}

export default Login
