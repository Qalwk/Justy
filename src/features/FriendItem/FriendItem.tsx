import pic1 from "../../../assets/users/user 1.png"

interface FriendItemProps {
  type?: string;
  stats?: string;
  onClick?: () => void;
}


export function FriendItem( {
  type,
  onClick,
  stats,
}: FriendItemProps) {
  return (
    <div onClick={onClick} className="w-full">
      {type === "top"
      ?
      <div className="flex flex-row w-full items-center justify-between">
          <div className="flex flex-row gap-4 items-center">
              <img src={pic1} alt="" />
              <span className="text-[16px] font-title font-normal text-white">Антон Слуцкий</span>
          </div>
          <span className="text-[12px] font-title font-normal text-[#87B7FF]">+15k</span>
      </div>
      :
      <div className="flex flex-row w-full items-center justify-start gap-4">
        <img src={pic1} alt="" />
        <div className="flex flex-col items-start">
            <span className="text-[16px] font-title font-normal text-white">Антон Слуцкий</span>
            <span className="text-[12px] font-title font-normal text-[#87B7FF]">{stats}</span>
        </div>
      </div>
      }
    </div>
  )
}



{/* <button className={`StatsButton flex flex-row gap-4 pl-3 items-center
  ${
    selected === true || align === `center`
      ? 'bg-gradient-to-r from-[#0565F7] to-[#87B7FF] blur-0 justify-center'
      : ''
  }`}
    type="button"
    style={{ height: height }} // Задаем высоту через inline-стиль
    onClick={onClick}
  > */}