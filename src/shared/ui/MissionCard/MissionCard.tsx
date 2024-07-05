import Btn from "./Button.svg?react"
import TgIcon from "./TelegramIcon.svg?react"

interface MissionCardProps {
    onClick?: () => void,
    key: number;
}

export function MissionCard({
    onClick,
    key,
}:MissionCardProps) {
  return (
    <button key={key} onClick={onClick} className="flex StatsButton w-full h-[60px] items-center justify-between pl-[20px] pr-[20px]">
        <div className="flex flex-row items-center gap-[15px]">
            <div className="w-[45px] h-[45px] rounded-[15px] bg-slate-600"></div>
            <div className="flex flex-col items-start">
                <span className="text-[16px] font-title font-normal text-white">Justy Click</span>
                <span className="text-[12px] font-title font-normal text-[#87B7FF]">300.000 Just</span>
            </div>
            <TgIcon />
        </div>
        <Btn />
    </button>
  )
}
