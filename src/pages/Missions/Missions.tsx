
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../../features/NavBar'
import { BackgroundHome } from '../../shared/ui/BackgroundHome'
import { MissionCard } from '../../shared/ui/MissionCard'

export function Missions() {

    const navigate = useNavigate();

    const handleLinkClick = (link:string) => {
      navigate(link);
    };

  return (
    <div>
      <div>
          <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[5rem] pb-[3rem]">
      <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center gap-[5rem]">
        
        <span className="text-[30px] font-title font-medium text-center text-white">Задание</span>
        
        <div className='max-w-[390px] w-full flex flex-col h-full gap-[10px] text-white'>
            {[...Array(6).keys()].map((index) => (
                <MissionCard key={index} onClick={() => { handleLinkClick('/game-missions-about')}} />
            ))}
        </div>
      </div>

      <div className="absolute bottom-0 mb-[3rem]">
        <NavBar initialActiveItem="mission"/>
      </div>

      <BackgroundHome/>
      
    </div>
    </div>
    </div>
  )
}
