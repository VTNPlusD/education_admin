import { Button } from 'antd'
import { CSSProperties } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from 'redux/reducers'
import { lightColors } from 'utils/colors'

type Props = {
  loading?: boolean
  title: string
  type?:
    | 'link'
    | 'text'
    | 'ghost'
    | 'default'
    | 'primary'
    | 'dashed'
    | undefined
  color?: string
  textColor?: string
  style?: CSSProperties
  onClick?: () => void
}

const VButton = ({
  loading = false,
  title,
  type = 'primary',
  color,
  textColor,
  style,
  onClick
}: Props) => {
  const theme = useSelector((state: AppState) => state.common.theme)
  return (
    <Button
      style={{
        ...stylesWithParam(color ? color : theme.PRIMARY_LINEAR_MAIN).btn,
        ...style,
        ...{ color: textColor ? textColor : theme.TEXT }
      }}
      loading={loading}
      type={type}
      onClick={onClick}
      htmlType='submit'>
      {title}
    </Button>
  )
}

const stylesWithParam = (val: string) => {
  const obj = { btn: {} }
  obj.btn = {
    background: val,
    boxShadow: lightColors.BOX_SHADOW_MAIN,
    borderRadius: 4,
    border: 'none'
  }
  return obj
}

export default VButton
