

interface StatsButtonProps {
    message1: string
    message2: string
    height: string; // Добавляем пропс для высоты
  }

export function StatsButton({
    message1,
    message2,
    height, // Принимаем пропс height
  }: StatsButtonProps) {

    return (
        <button className="StatsButton flex flex-row gap-4 pl-3 items-center"
          type="button"
          style={{ height: height }} // Задаем высоту через inline-стиль
          
        //   className={clsx(styles.button, className, {
        //     [styles.primary]: variant === 'primary',
        //     [styles.secondary]: variant === 'secondary',
        //   })}
        >
          <span className='StatsButton-message'>
            {message1}
          </span>
          <span className='StatsButton-message text-[#87B7FF]'>
            {message2}
          </span>
        </button>
      )
}

