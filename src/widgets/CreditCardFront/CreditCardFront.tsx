import { useAppSelector } from '@/app/hooks/useActions'
import CreditCard from '@/features/CreditCard/CreditCard'
import bgCreditFront from '@public/images/bg-card-front.png'

export default function CreditCardFront() {
  const credentials = useAppSelector((state) => state.credentials.value)
  return (
    <CreditCard
      className="left-4 top-[7.25rem] lg:left-[45%] lg:top-36 w-full"
      imageURL={bgCreditFront}
    >
      <div className="relative z-10 h-full py-4 lg:py-5 px-6 lg:px-7 flex flex-col justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-foreground w-[12%] aspect-square"></div>
          <div className="rounded-full border-[1px] border-foreground w-[5%] aspect-square"></div>
        </div>
        <div>
          <p className="mb-3 lg:mb-5 text-base lg:text-xl tracking-[0.16rem]">
            {credentials.number}
          </p>
          <div className="flex justify-between text-[0.6rem] lg:text-xs tracking-widest">
            <p className="uppercase">{credentials.name}</p>
            <p>
              {credentials.month}/{credentials.year}
            </p>
          </div>
        </div>
      </div>
    </CreditCard>
  )
}
