import { NavBar } from "../../features/NavBar";
import { ActionButton } from "../../shared/ui/ActionButton";
import { BackgroundHome } from "../../shared/ui/BackgroundHome";

export function MissionAbout() {
  return (
    <div className="flex justify-center items-center h-screen w-full mx-auto">
        <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center px-5 pt-[12rem]">
            <div className="max-w-[390px] w-full h-[100%] flex flex-col items-center gap-[2rem]">
                <div className="flex flex-row gap-5 items-center justify-center">
                    <div className="w-[90px] h-[90px] rounded-[25px] bg-slate-600"></div>
                    <span className="text-[30px] font-title font-medium text-start text-white">Justy Click</span>
                </div>
                <div className='max-w-[390px] w-full flex flex-col h-full text-white'>
                    <div className='flex flex-col gap-2'>
                        <div className="flex flex-col gap-2">
                            <div className='flex flex-col gap-2'>
                                <ActionButton 
                                    variant='secondary' 
                                    selected={false}    
                                    onClick={() => {}} 
                                    message='Подписаться на телеграм канал' />
                                <ActionButton 
                                    variant='primary' 
                                    selected={false} 
                                    onClick={() => {}} 
                                    message='Забрать 300.000 Just' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 mb-[3rem]">
                <NavBar initialActiveItem="mission"/>
            </div>
        </div>
        <BackgroundHome/>
    </div>
  )
}

