import { GlobalOutlined } from '@ant-design/icons'
import { Checkbox, DatePicker, Form, Input, Radio, Select } from 'antd'
import VButton from 'components/button/VButton'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ILoginRequest } from 'services/requests/LoginRequest'
import styles from 'styles/Login.module.scss'

const { Option } = Select

type Props = {
  handleLogin: (loginRequest: ILoginRequest) => void
  isLoading: boolean
}

type LayoutType = Parameters<typeof Form>[0]['layout']

const Login = ({ handleLogin, isLoading }: Props) => {
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
        message: t('validation.login_form.time')
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

  const changeLanguage = (e: any) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  const onChangeUser = (e: any) => {
    setUsername(e.target.value)
    e.preventDefault()
  }

  const onChangePassword = (e: any) => {
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
          label={t('login_screen.username')}
          name='username'
          rules={[
            {
              required: true,
              message: t('validation.login_form.not_empty_user')
            }
          ]}>
          <Input value={username} onChange={onChangeUser} />
        </Form.Item>
        <Form.Item
          label={t('login_screen.pass')}
          name='password'
          rules={[
            {
              required: true,
              message: t('validation.login_form.not_empty_pass')
            }
          ]}>
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>
        <div className={styles.remember_container}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox className='c'>{t('login_screen.remember')}</Checkbox>
          </Form.Item>
          <span onClick={handleChangeRegister} className='c'>
            {t('login_screen.register')}
          </span>
        </div>
        <div className='text-align-center'>
          <VButton
            isLoading={isLoading}
            type='primary'
            title={t('login_screen.login_btn')}
          />
        </div>
      </Form>
    )
  }

  const _renderRegister = () => {
    return (
      <Form {...layout}>
        <Form.Item
          label={t('login_screen.username')}
          name='username'
          rules={[
            {
              required: true,
              message: t('validation.login_form.not_empty_user')
            }
          ]}>
          <Input value={username} onChange={onChangeUser} />
        </Form.Item>
        <Form.Item
          label={t('login_screen.pass')}
          name='password'
          rules={[
            {
              required: true,
              message: t('validation.login_form.not_empty_pass')
            }
          ]}>
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>
        <Form.Item
          name='phone'
          label={t('login_screen.phone_number')}
          rules={[
            { required: true, message: t('validation.login_form.phone') }
          ]}>
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name='date-picker'
          label={t('login_screen.birthday')}
          {...config}>
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>
        <div className={styles.remember_container}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>{t('login_screen.terms_of_use')}</Checkbox>
          </Form.Item>
          <span onClick={handleChangeLogin} className='c'>
            {t('login_screen.login_btn')}
          </span>
        </div>
        <div className='text-align-center'>
          <VButton
            isLoading={isLoading}
            type='primary'
            title={t('login_screen.register')}
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
