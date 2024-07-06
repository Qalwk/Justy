


interface ActionButtonProps {
    variant: 'primary' | 'secondary'
    onClick: () => void
    message: string
    className?: string
    selected?: boolean
  }

export function ActionButton({
    variant = 'primary',
    onClick,
    message,
    selected,
  }: ActionButtonProps) {

    // const navigate = useNavigate();

    // const handleLinkClick = (link:string) => {
    //   navigate(link);
    // };
    
    return (
      <>
          {selected
          ?
            <button onClick={onClick} className={`ActionButton StatsButton
                ${
                    variant === 'primary'
                      ? 'bg-gradient-to-r from-[#FF8787] to-[#F70505] blur-0' 
                      : 'bg-black/10'
                  }`}
              type="button"
            >
              <span className='ActionButton-message'>
                {message}
              </span>
            </button>
          :
            <button onClick={onClick} className={`ActionButton StatsButton
              ${
                  variant === 'primary'
                    ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
                    : 'bg-black/10'
                }`}
            type="button"
            >
            <span className='ActionButton-message'>
              {message}
            </span>
          </button>
          }
          </>
      )
}
        // <button onClick={onClick} className={`ActionButton StatsButton
        //     ${
        //         variant === 'primary'
        //           ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
        //           : 'bg-black/10'
        //       }
        //     ${
        //       selected
        //         ? "bg-blue-500"
        //         : ''
        //     }`}
            
        //   type="button"
        // >
        //   <span className='ActionButton-message'>
        //     {message}
        //   </span>
        // </button>


        //   className={clsx(styles.button, className, {
        //     [styles.primary]: variant === 'primary',
        //     [styles.secondary]: variant === 'secondary',
        //   })}
          //onClick={() => handleLinkClick("/game-top")}

          // <>
          // {selected == false
          // ?
          //   <button className={`ActionButton StatsButton
          //       ${
          //           variant === 'primary'
          //             ? 'bg-gradient-to-r from-[#FF8787] to-[#F70505] blur-0'
          //             : 'bg-black/10'
          //         }`}
          //     type="button"
          //   >
          //     <span className='ActionButton-message'>
          //       {message}
          //     </span>
          //   </button>
          // :
          //   <button className={`ActionButton StatsButton
          //     ${
          //         variant === 'primary'
          //           ? 'bg-gradient-to-r from-[#87B7FF] to-[#0565F7] blur-0'
          //           : 'bg-black/10'
          //       }`}
          //   type="button"
          //   >
          //   <span className='ActionButton-message'>
          //     {message}
          //   </span>
          // </button>
          // }
          // </>