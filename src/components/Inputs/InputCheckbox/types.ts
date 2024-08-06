export default interface InputCheckboxProps {
  id: string
  name: string
  type?: string
  label?: string
  checked?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: undefined | string
}
