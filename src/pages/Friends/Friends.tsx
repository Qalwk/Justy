import { FriendItem } from "../../features/FriendItem";
import { NavBar } from "../../features/NavBar";
import { ActionButton } from "../../shared/ui/ActionButton";
import { BackgroundHome } from "../../shared/ui/BackgroundHome";
import { StatsButton } from "../../shared/ui/StatsButton";


export function Friends() {
  return (
    <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[5rem] pb-[3rem]">
      <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center gap-[5rem]">
        
        <span className="text-[30px] font-title font-medium text-center text-white">Друзья</span>
        
        <div className='max-w-[390px] w-full flex flex-col h-full gap-[30px] text-white'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2'>
              <StatsButton message1='Друзей:' message2='19' height='60px' />
              <StatsButton message1='Всего:' message2='75k' height='60px' />
            </div>
            <div className="h-[296px] w-full StatsButton flex flex-col gap-[10px] pl-5 pr-5 pt-5 pb-5 items-start overflow-y-auto">
              <FriendItem type="top" />
              <FriendItem type="top" />
              <FriendItem type="top" />
              <FriendItem type="top" />
              <FriendItem type="top" />
              <FriendItem type="top" />
            </div>
            <ActionButton variant='primary' message='Пригласить друзей' onClick={() => {}}/>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 mb-[3rem]">
        <NavBar initialActiveItem="friend"/>
      </div>

      <BackgroundHome/>
      
    </div>
  )
}
