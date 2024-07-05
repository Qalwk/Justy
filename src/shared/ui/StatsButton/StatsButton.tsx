

interface StatsButtonProps {
    message1: string
    message2?: string
    onClick?: (() => void) | undefined
    selected?: boolean
    align?: string
    clanstats?: boolean
    height: string; // Добавляем пропс для высоты
  }

export function StatsButton({
    message1,
    message2,
    height, // Принимаем пропс height
    onClick,
    selected,
    clanstats,
    align,
  }: StatsButtonProps) {

    return (
      <>
        {clanstats == true
        ?
        <button className="StatsButton flex flex-col items-center justify-center"
            type="button"
            style={{ height: height }} // Задаем высоту через inline-стиль
            onClick={onClick}
          >
            <span className='font-title text-[16px] font-normal'>
              {message1}
            </span>
            <span className='font-title text-[12px] font-medium text-[#87B7FF]'>
              {message2}
            </span>
          </button>
        :
          <button className={`StatsButton flex flex-row gap-4 items-center justify-center
          ${
            selected === true || align === `center`
              ? 'bg-gradient-to-r from-[#0565F7] to-[#87B7FF] blur-0 pl-1'
              : ''
          }`}
            type="button"
            style={{ height: height }} // Задаем высоту через inline-стиль
            onClick={onClick}
          >
            <span className='StatsButton-message font-medium'>
              {message1}
            </span>
            <span className='StatsButton-message font-medium text-[#87B7FF]'>
              {message2}
            </span>
          </button>
        }
      </>
      )
}

