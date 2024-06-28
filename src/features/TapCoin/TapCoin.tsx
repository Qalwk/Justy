
import Star from "./Star.svg?react"
import UpEl from "./UpEl.svg?react"
import UpWhite from "./UpWhite.svg?react"
import DownEl from "./DownEl.svg?react"
import DownWhite from "./DownWhite.svg?react"

export function TapCoin() {
  
    return (
      <div className='relative flex items-center justify-center mb-[3rem]'>
        <Star className="absolute z-20" />
        <UpEl className="absolute z-10" />
        <UpWhite className="absolute z-10" />
        <DownEl className="absolute z-0" />
        <DownWhite className="absolute z-0" />
      </div>
    )
  }
  