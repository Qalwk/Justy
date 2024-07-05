import { HomePage } from './HomePage'
import { Friends } from './Friends'

import { Route, Routes } from 'react-router-dom'
import { Top } from './Top'
import { ClanInfo } from './ClanInfo'
import { Missions } from './Missions'
import { MissionAbout } from './MissionAbout'
import { Boosts } from './Boosts'

export function PageRoutes() {
    //const location = useLocation()

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/your-friends" element={<Friends />} />
            <Route path="/game-top" element={<Top />} />
            <Route path="/clan-info" element={<ClanInfo />} />
            <Route path='/game-missions' element={<Missions />} />
            <Route path='/game-missions-about' element={<MissionAbout />} />
            <Route path='/game-boosts' element={<Boosts />} />
        </Routes>
    )
}