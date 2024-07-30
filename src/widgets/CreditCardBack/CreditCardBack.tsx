import { useAppSelector } from '@/app/hooks/useActions'
import CreditCard from '@/features/CreditCard/CreditCard'
import bgCreditBack from '@public/images/bg-card-back.png'

export default function CreditCardBack() {
  const credentials = useAppSelector((state) => state.credentials.value)
  return (
    <CreditCard
      className="right-4 top-7 lg:left-[60%] lg:top-[23rem] w-full"
      imageURL={bgCreditBack}
    >
      <p className="absolute top-[43%] left-[80%] text-[min(4vw,14px)]">
        {credentials.cvc}
      </p>
    </CreditCard>
  )
}
