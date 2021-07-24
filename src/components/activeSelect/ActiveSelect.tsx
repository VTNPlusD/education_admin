import { Select, Tag } from 'antd'
import { EUserStatus } from 'interfaces/enums/EUserStatus'
import { useState } from 'react'

type Props = {
  active: boolean
  handleChangeActive: (val: boolean) => void
}

const ActiveSelect = ({ active, handleChangeActive }: Props) => {
  const [activeVal, setActiveVal] = useState<string[]>([
    active ? EUserStatus.ACTIVE : EUserStatus.BLOCK
  ])

  const onChangeActive = (val: any) => {
    handleChangeActive(val === EUserStatus.ACTIVE ? true : false)
    setActiveVal(val)
  }

  const options = [{ value: EUserStatus.ACTIVE }, { value: EUserStatus.BLOCK }]

  function tagRender(props: any) {
    const { label, closable, onClose } = props
    const onPreventMouseDown = (event: any) => {
      event.preventDefault()
      event.stopPropagation()
    }
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}>
        {label}
      </Tag>
    )
  }

  return (
    <>
      <p>Active</p>
      <Select
        showArrow
        tagRender={tagRender}
        value={activeVal}
        onChange={onChangeActive}
        style={{ ...styles.margin, ...{ width: '100%' } }}
        options={options}
      />
    </>
  )
}

const styles = {
  margin: { marginTop: 8, marginBottom: 8 },
  imgContainer: { display: 'flex', justifyContent: 'center' }
}

export default ActiveSelect
