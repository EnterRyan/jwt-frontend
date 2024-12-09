import { ProtectRouterProvider } from '@app/providers/ProtectRouterProvider'
import './styles/base.css'
import './styles/theme-color.css'
export default function App(){
  return (
    <ProtectRouterProvider />
  )
}