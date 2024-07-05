import { useState } from "react";
import { FriendItem } from "../../features/FriendItem";
import { NavBar } from "../../features/NavBar";
import { ActionButton } from "../../shared/ui/ActionButton";
import { BackgroundHome } from "../../shared/ui/BackgroundHome";
import { StatsButton } from "../../shared/ui/StatsButton";
import { useNavigate } from "react-router-dom";


export function Top() {

  const navigate = useNavigate();

  const handleLinkClick = (link:string) => {
    navigate(link);
  };

  const [selectedButton, setSelectedButton] = useState('players'); // Изначально выбран первый пункт

  return (
    <div>
      <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[5rem] pb-[3rem]">
      <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center gap-[5rem]">
        
        <span className="text-[30px] font-title font-medium text-center text-white">Рейтинг</span>
        
        <div className='max-w-[390px] w-full flex flex-col h-full gap-[30px] text-white'>
          <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-2'>
            <StatsButton message1='Игроки' height='40px' selected={selectedButton === 'players'} onClick={() => setSelectedButton('players')} />
            <StatsButton message1='Кланы' height='40px' selected={selectedButton === 'clans'} onClick={() => setSelectedButton('clans')} />
            </div>
            <div className="h-[320px] w-full StatsButton flex flex-col gap-[10px] pl-5 pr-5 pt-5 pb-5 items-start overflow-y-auto">
                {selectedButton === 'players' && (
                  <>
                    {[...Array(100).keys()].map((index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className={`text-[12px] font-medium font-mono ${index < 3 ? 'text-[#87B7FF]' : ''}`}>
                          {index + 1}
                        </span> {/* Вывод порядкового номера */}
                        <FriendItem stats="34 friend" /> 
                      </div>
                    ))}
                  </>
                )}
                {selectedButton === 'clans' && (
                  <>
                    {[...Array(4).keys()].map((index) => (
                      <div key={index} className="flex items-center gap-4">
                        <span className={`text-[12px] font-medium font-mono ${index < 3 ? 'text-[#87B7FF]' : ''}`}>
                          {index + 1}
                        </span> {/* Вывод порядкового номера */}
                        <FriendItem stats="34.242.546.543 Just" onClick={() => { handleLinkClick('/clan-info')}}/> 
                      </div>
                    ))}
                  </>
                )}
            </div>
            <ActionButton variant='primary' message='Пригласить друзей' onClick={() => {}}/>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 mb-[3rem]">
        <NavBar initialActiveItem="top"/>
      </div>

      <BackgroundHome/>
      
    </div>
    </div>
  )
}


