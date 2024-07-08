import { useLocation } from 'react-router-dom'
import { ROUTES } from '../const/routes'

export const useIsHomePage = (): boolean => {
  const location = useLocation()

  return location.pathname === ROUTES.MAIN_BOARD
}
