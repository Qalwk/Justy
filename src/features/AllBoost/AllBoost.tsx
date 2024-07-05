import Btn from "../../shared/ui/MissionCard/Button.svg?react"
import MultiIcon from "./MultiTap.svg?react"
import ReloadIcon from "./Reload.svg?react"
import EmcostIcon from "./Emcost.svg?react"

interface AllBoostProps {
  selected?: boolean;
  lvl?: string;
  text?: string;
  icon?: string;
  value?: string;
}

export function AllBoost({
  selected,
  lvl,
  text,
  icon,
  value,
}:AllBoostProps) {
  return (
    <div className="flex flex-row h-[65px] items-center justify-between pr-5">
      <div className="flex flex-row gap-3 items-center">
        <div className={`StatsButton flex items-center justify-center py-[10px] px-[10px] w-[65px]
          ${selected
            ?
            `bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0`
            :
            ``
          }`}>
            {
              icon === "MultiIcon" && <MultiIcon className="w-[44px] h-[44px]" /> 
          }
          {
            icon === "ReloadIcon" && <ReloadIcon className="w-[44px] h-[44px]" />
          }
          {
            icon === "EmcostIcon" && <EmcostIcon className="w-[44px] h-[44px]" />
          }
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 items-center">
              <span className="text-[16px] font-title font-normal text-white">{text}</span>
              <span className="text-[12px] font-title font-normal text-nowrap">{lvl}</span>
          </div>
          <span className="text-[12px] font-title font-normal text-[#87B7FF]">{value}</span>
        </div>
      </div>
      <Btn />
    </div>
  )
}
