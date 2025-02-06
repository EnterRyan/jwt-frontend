import { ProtectRouterProvider } from '@app/providers/ProtectRouterProvider'
import ThemeInitializer from '@features/theme/ThemeInitializer'
import './styles/base.css'
import './styles/theme.css'
import  '@app/styles/font.css'
export default function App(){
  return (
    <>
    <ThemeInitializer />
    <ProtectRouterProvider />
    </>
  )
}