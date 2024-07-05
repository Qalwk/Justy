import { useState } from "react";
import { FriendItem } from "../../features/FriendItem";
import { ActionButton } from "../../shared/ui/ActionButton";
import { BackgroundHome } from "../../shared/ui/BackgroundHome";
import { StatsButton } from "../../shared/ui/StatsButton";


export function ClanInfo() {

  const [selectedButton, setSelectedButton] = useState('join'); // Изначально выбран первый пункт

  return (
    <div className="flex justify-end items-end h-full">
      <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[5rem]">
        <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center gap-[2rem]">
          <div className="flex flex-col gap-5 items-center">
            <div className="w-[90px] h-[90px] rounded-[25px] bg-slate-600"></div>
            <span className="text-[30px] font-title font-medium text-center text-white">Justy Click</span>
          </div>
          
          <div className='max-w-[390px] w-full flex flex-col h-full text-white'>
            <div className='flex flex-col gap-2'>
              <div className="flex flex-col gap-2">
                <div className='flex flex-row gap-2'>
                  <StatsButton clanstats={true} message1='Игроков' message2='30' height='60px' />
                  <StatsButton clanstats={true} message1='Just' message2='1.020M' height='60px' />
                </div>
              </div>
              {
                selectedButton === 'join'
                ? 
                <ActionButton 
                variant='primary' 
                selected={false} 
                onClick={() => setSelectedButton('leave')} 
                message='Присоединиться' />
                : 
                <ActionButton 
                variant='primary' 
                selected={true}
                onClick={() => setSelectedButton('join')} 
                message='Покинуть' />
              }
              
              
              <div className="h-[400px] w-full StatsButton flex flex-col gap-[10px] pl-5 pr-5 pt-5 pb-5 items-start overflow-y-auto">
                      {[...Array(30).keys()].map((index) => (
                        <div key={index} className="flex items-center gap-4">
                          <span className={`text-[12px] font-medium font-mono ${index < 3 ? 'text-[#87B7FF]' : ''}`}>
                            {index + 1}
                          </span> {/* Вывод порядкового номера */}
                          <FriendItem stats="34M Just" /> 
                        </div>
                      ))}
              </div>
            </div>
        </div>
      </div>
        <BackgroundHome/>
        </div>
    </div>
  )
}
