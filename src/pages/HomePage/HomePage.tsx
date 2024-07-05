import { BackgroundHome } from '../../shared/ui/BackgroundHome'
import { NavBar } from '../../features/NavBar'
import { ActionButton } from '../../shared/ui/ActionButton/ActionButton'
import { StatsButton } from '../../shared/ui/StatsButton/StatsButton'
import { BalanceAmount } from '../../features/BalanceAmount/BalanceAmount'
import { TapCoin } from '../../features/TapCoin/TapCoin'
//import { EnergyRing } from '../../features/EnergyRing/EnergyRing'

export function HomePage() {
  return (
    <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[3rem] pb-[3rem]">
      <div className='max-w-[390px] w-full flex flex-col h-full gap-[30px] text-white'>
        <div className='flex flex-col gap-2'>
          <ActionButton variant='primary' message='Поиск клана' onClick={() => {}}/>
          <div className='flex flex-row gap-2'>
            <StatsButton message1='Tap' message2='+6 Just' height='40px' />
            <StatsButton message1='For up' message2='100k' height='40px' />
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center justify-start'>
          <div className='flex items-center justify-center w-[55px] h-[21px] rounded-[25px] 
            bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'>
            <span className='text-[12px] font-title text-[#000]'>JUST</span>
          </div>
          <BalanceAmount amount={9000000}/>
        </div>
      </div>

      <div className="absolute bottom-0 mb-[15rem]">
        <TapCoin />
      </div>

      <div className="absolute bottom-0 mb-[3rem]">
        <NavBar initialActiveItem="home"/>
      </div>

      <BackgroundHome/>
      
    </div> 
  )
}
