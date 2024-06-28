

interface BalanceAmountProps {
  amount: number
}

export function BalanceAmount({ amount }: BalanceAmountProps) {

  const formattedAmount = new Intl.NumberFormat('en-US').format(amount)

  return (
    <div className='text-[30px] font-title font-medium text-center'>
      {formattedAmount}
    </div>
  )
}
