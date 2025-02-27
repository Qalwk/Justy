import { useCallback, useEffect } from 'react'
import { useIsHomePage } from '../../shared/hooks/index'
import { useTelegram } from '../../entities/hooks'
import { useNavigate } from 'react-router-dom'

export function TelegramProvider() {
  const navigate = useNavigate()
  const isHomePage = useIsHomePage()
  const telegram = useTelegram()

  const handleBack = useCallback(() => navigate(-1), [navigate])

  useEffect(() => {
    if (!telegram) return

    telegram.setHeaderColor('#000000')

    if (isHomePage) {
      telegram.BackButton.hide()

      return
    }

    telegram.BackButton.show()
  }, [telegram, isHomePage])

  useEffect(() => {
    telegram.BackButton.onClick(handleBack)

    return () => {
      telegram.BackButton.offClick(handleBack)
    }
  }, [handleBack, telegram.BackButton])

  return null
}
