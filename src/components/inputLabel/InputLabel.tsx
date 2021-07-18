import { Input } from 'antd'

type Props = {
  value?: string
  label: string
  placeholder?: string
  disabled?: boolean
  onChange: (val: string) => void
  onClick?: () => void
}

const InputLabel = ({
  value,
  label,
  placeholder,
  disabled = false,
  onChange,
  onClick
}: Props) => {
  return (
    <>
      <p style={styles.label}>{label}</p>
      <Input
        disabled={disabled}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChange={(val) => onChange(val.target.value)}
        onClick={onClick}
      />
    </>
  )
}
const styles = {
  label: {
    fontWeight: 500
  },
  input: {
    marginTop: 8,
    marginBottom: 8
  }
}
export default InputLabel
