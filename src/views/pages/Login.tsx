import { Button, Checkbox, Form, Input, Radio } from 'antd'
import { GlobalOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LoginRequest } from 'services/requests/LoginRequest'
import styles from 'styles/Login.module.scss'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

type Props = {
  handleLogin: (loginRequest: LoginRequest) => void
}

const Login = ({ handleLogin }: Props) => {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const onFinish = () => {
    const loginRequest: LoginRequest = {
      username: 'root',
      password: 'root'
    }
    handleLogin(loginRequest)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const changeLanguage = (e: any) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  const _renderLanguage = () => {
    return (
      <div className={`change-locale ${styles.change_locale}`}>
        <span style={{ marginRight: 16 }}><GlobalOutlined /> {t('common.lang')} </span>
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

  return (
    <div className='padding-16'>
      {_renderLanguage()}
      <Form
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label={t('login_screen.username')}
          name='username'
          rules={[{ required: true, message: t('validation.login_form.not_empty_user') }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label={t('login_screen.pass')}
          name='password'
          rules={[{ required: true, message: t('validation.login_form.not_empty_pass') }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>{t('login_screen.remember')}</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>
            {t('login_screen.login_btn')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
