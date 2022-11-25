import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$background600',
  borderRadius: '$md',
})

export function App() {
  return <Button />
}
