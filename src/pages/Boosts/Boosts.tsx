import { AllBoost } from "../../features/AllBoost"
import { DailyBoost } from "../../features/DailyBoost"
import { NavBar } from "../../features/NavBar"
import { BackgroundHome } from "../../shared/ui/BackgroundHome"


export function Boosts() {
  return (
    <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[5rem] pb-[3rem]">
      <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center gap-[5rem]">
        
        <span className="text-[30px] font-title font-medium text-center text-white">Улучшения</span>
        
        <div className='max-w-[390px] w-full flex flex-col h-full gap-[30px] text-white'>
          <div className='flex flex-col gap-5'>
            <span className="font-title">Ежедневные бустеры</span>
            <div className='flex flex-row gap-2'>
              <DailyBoost text="Турбо тап" variant="3/3" selected={true} icon="TurboIcon" />
              <DailyBoost text="Полная энергия" variant="Осталось 0:31:45" selected={false}  />
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <span className="font-title">Бустеры</span>
            <div className="h-[265px] w-full StatsButton flex flex-col pl-5 pr-2 pt-5 pb-2 gap-[15px]">
              <AllBoost text="Мультитап" value="500.000 Just" selected={false} lvl="3 lvl" icon="MultiIcon" />
              <AllBoost text="Емкость" value="300.000 Just" selected={true} lvl="2 lvl" icon="ReloadIcon" />
              <AllBoost text="Перезарядка" value="300.000 Just" selected={true} lvl="2 lvl" icon="EmcostIcon" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 mb-[3rem]">
        <NavBar initialActiveItem="boosts"/>
      </div>

      <BackgroundHome/>
      
    </div>
  )
}

export default Boosts
