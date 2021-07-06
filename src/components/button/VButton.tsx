import { Button } from 'antd'

type Props = {
  isLoading: boolean
  title: string
  type: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
}

const VButton = ({ isLoading, title, type }: Props) => {
  return (
    <Button loading={isLoading} type={type} htmlType='submit'>
      {title}
    </Button>
  )
}

export default VButton
