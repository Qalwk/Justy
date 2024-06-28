import { useState } from 'react'
import Home from "./Home.svg?react"
import Friends from "./Friends.svg?react"
import Top from "./Top.svg?react"
import Mission from "./Mission.svg?react"
import Boosts from "./Boosts.svg?react"

export function NavBar() {



  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item:string) => {
    setActiveItem(item);
  };

  return (
    <div className='relative'>
      <div className='flex flex-row w-[274px] h-[48px] p-[4px] gap-1 z-[10] absolute'>
        
        <div className={`flex items-center w-[50px] h-[40px] rounded-[25px] pl-[15px] 
              ${
              activeItem === 'home'
                ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                : ''
            }`}
            onClick={() => handleItemClick('home')}
          >
                      <Home/>
          </div>
          <div className={`flex items-center w-[50px] h-[40px] rounded-[25px] pl-[15px] 
              ${
              activeItem === 'friend'
                ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                : ''
            }`}
            onClick={() => handleItemClick('friend')}
          >
                      <Friends/>
          </div>
          <div className={`flex items-center w-[50px] h-[40px] rounded-[25px] pl-[15px] 
              ${
              activeItem === 'top'
                ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                : ''
            }`}
            onClick={() => handleItemClick('top')}
          >
                      <Top/>
          </div>
          <div className={`flex items-center w-[50px] h-[40px] rounded-[25px] pl-[15px] 
              ${
              activeItem === 'mission'
                ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                : ''
            }`}
            onClick={() => handleItemClick('mission')}
          >
                      <Mission/>
          </div>
          <div className={`flex items-center w-[50px] h-[40px] rounded-[25px] pl-[15px] 
              ${
              activeItem === 'boosts'
                ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                : ''
            }`}
            onClick={() => handleItemClick('boosts')}
          >
                      <Boosts/>
          </div>
      </div>

      <div className='w-[274px] h-[48px] top-0 z-[5]'>
        <svg width="274" height="48" viewBox="0 0 274 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_65_1172)">
              <rect width="274" height="48" rx="24" fill="white" fill-opacity="0.1"/>
              <g opacity="0.6" filter="url(#filter0_f_65_1172)">
              <rect x="-20" y="4" width="40" height="32" rx="16" fill="url(#paint0_linear_65_1172)"/>
              </g>
              <g opacity="0.6" filter="url(#filter1_f_65_1172)">
              <rect x="204" y="4" width="40" height="32" rx="16" fill="url(#paint1_linear_65_1172)"/>
              </g>
              <g opacity="0.6" filter="url(#filter2_f_65_1172)">
              <rect x="92" y="24" width="40" height="32" rx="16" fill="url(#paint2_linear_65_1172)"/>
              </g>
              <g opacity="0.6" filter="url(#filter3_f_65_1172)">
              <rect x="137" y="-16" width="40" height="32" rx="16" fill="url(#paint3_linear_65_1172)"/>
              </g>
              <g opacity="0.6" filter="url(#filter4_f_65_1172)">
              <rect x="48" y="-16" width="40" height="32" rx="16" fill="url(#paint4_linear_65_1172)"/>
              </g>
              </g>
              <rect x="0.25" y="0.25" width="273.5" height="47.5" rx="23.75" stroke="white" stroke-width="0.5"/>
              <defs>
              <filter id="filter0_f_65_1172" x="-70" y="-46" width="140" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_65_1172"/>
              </filter>
              <filter id="filter1_f_65_1172" x="154" y="-46" width="140" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_65_1172"/>
              </filter>
              <filter id="filter2_f_65_1172" x="42" y="-26" width="140" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_65_1172"/>
              </filter>
              <filter id="filter3_f_65_1172" x="87" y="-66" width="140" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_65_1172"/>
              </filter>
              <filter id="filter4_f_65_1172" x="-2" y="-66" width="140" height="132" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_65_1172"/>
              </filter>
              <linearGradient id="paint0_linear_65_1172" x1="20" y1="20" x2="-20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0565F7"/>
              <stop offset="1" stop-color="#87B7FF"/>
              </linearGradient>
              <linearGradient id="paint1_linear_65_1172" x1="244" y1="20" x2="204" y2="20" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0565F7"/>
              <stop offset="1" stop-color="#87B7FF"/>
              </linearGradient>
              <linearGradient id="paint2_linear_65_1172" x1="132" y1="40" x2="92" y2="40" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0565F7"/>
              <stop offset="1" stop-color="#87B7FF"/>
              </linearGradient>
              <linearGradient id="paint3_linear_65_1172" x1="177" y1="0" x2="137" y2="0" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0565F7"/>
              <stop offset="1" stop-color="#87B7FF"/>
              </linearGradient>
              <linearGradient id="paint4_linear_65_1172" x1="88" y1="0" x2="48" y2="0" gradientUnits="userSpaceOnUse">
              <stop stop-color="#0565F7"/>
              <stop offset="1" stop-color="#87B7FF"/>
              </linearGradient>
              <clipPath id="clip0_65_1172">
              <rect width="274" height="48" rx="24" fill="white"/>
              </clipPath>
              </defs>
          </svg>
      </div>

    </div>
  )
}

