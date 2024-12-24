import { ProtectRouterProvider } from '@app/providers/ProtectRouterProvider'
import './styles/base.css'
import './styles/theme.css'
import  '@app/styles/font.css'
export default function App(){
  return (
    <ProtectRouterProvider />
  )
}