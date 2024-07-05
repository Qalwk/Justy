import TurboIcon from "./TurboIcon.svg?react"
import EnergyIcon from "./EnergyIcon.svg?react"

interface DailyBoostProps {
  selected?: boolean;
  variant?: string;
  text?: string;
  icon?: string;
}

export function DailyBoost({
  selected,
  variant,
  text,
  icon,
}:DailyBoostProps) {
  return (
    <div className={`h-[110px] w-full StatsButton relative pl-5 pr-2 pt-3 pb-2
      ${
        selected
          ? "bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0"
          : "opacity-70"
      }`
    }>
        <div className="flex flex-col">
          <span className="font-title">{text}</span>
          <span className="font-title text-[12px] opacity-80 w-[75px]">{variant}</span>
        </div>
        <div className="absolute right-[10px] bottom-[10px]">
          {
            icon === "TurboIcon"
            ?
              <TurboIcon />
            :
              <EnergyIcon />
          }
        </div>
    </div>
  )
}

/* Flash */

// position: absolute;
// width: 55px;
// height: 55px;
// left: calc(50% - 55px/2 + 47.5px);
// top: calc(50% - 55px/2 + 12.5px);

