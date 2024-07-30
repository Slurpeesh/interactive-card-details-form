import CredentialsForm from '@/widgets/CredentialsForm/CredentialsForm'
import CreditCardBack from '@/widgets/CreditCardBack/CreditCardBack'
import CreditCardFront from '@/widgets/CreditCardFront/CreditCardFront'
import bgGradientDesktop from '@public/images/bg-main-desktop.png'
import bgGradientMobile from '@public/images/bg-main-mobile.png'
import useWindowWidth from './hooks/useWindowWidth'

export default function App() {
  const deviceWidth = useWindowWidth()
  const bgImage = deviceWidth >= 1024 ? bgGradientDesktop : bgGradientMobile
  return (
    <div className="relative h-dvh w-full flex flex-col lg:flex-row gap-0 lg:gap-32 text-sm lg:text-base">
      <div
        className="relative top-0 left-0 w-full h-1/3 lg:h-full lg:w-1/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <CreditCardBack />
        <CreditCardFront />
      </div>

      <div className="flex-grow flex justify-center items-center m-5">
        <CredentialsForm />
      </div>
    </div>
  )
}
