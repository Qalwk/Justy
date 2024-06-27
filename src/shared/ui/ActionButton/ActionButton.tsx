import React from 'react'
import type { MouseEventHandler } from 'react'

interface ActionButtonProps {
    variant: 'primary' | 'secondary'
    onClick: MouseEventHandler<HTMLButtonElement>
    message: string
    className?: string
  }

export function ActionButton({
    variant = 'primary',
    onClick,
    className,
    message,
  }: ActionButtonProps) {
    
    return (
        <button className={`ActionButton
            ${
                variant === 'primary'
                  ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                  : 'bg-black/10'
              }`}
          type="button"
          
        //   className={clsx(styles.button, className, {
        //     [styles.primary]: variant === 'primary',
        //     [styles.secondary]: variant === 'secondary',
        //   })}
          onClick={onClick}
        >
          <span className='ActionButton-message'>
            {message}
          </span>
        </button>
      )
}