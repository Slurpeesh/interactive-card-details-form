import { ReactNode } from 'react'

interface ICreditCard {
  imageURL: string
  className?: string
  children?: ReactNode
}

export default function CreditCard({
  imageURL,
  className,
  children,
}: ICreditCard) {
  return (
    <div
      className={
        'absolute max-w-72 lg:w-[360px] lg:max-w-full aspect-[447/245] shadow-xl text-foreground' +
        ' ' +
        className
      }
    >
      <div
        className="absolute w-full h-full bg-cover"
        style={{ backgroundImage: `url(${imageURL})` }}
      ></div>
      {children}
    </div>
  )
}
