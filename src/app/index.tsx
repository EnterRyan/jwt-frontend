import { ProtectRouterProvider } from '@app/providers/ProtectRouterProvider'
import ThemeInitializer from '@app/redux/initializer/ThemeInitializer'
import './styles/base.css'
import './styles/theme.css'
import  '@app/styles/font.css'
import AppWrapper from '@shared/ui/Layout/AppWrapper'
export default function App(){
  return (
    <AppWrapper>
    <ThemeInitializer />
    <ProtectRouterProvider />
    </AppWrapper>
  )
}