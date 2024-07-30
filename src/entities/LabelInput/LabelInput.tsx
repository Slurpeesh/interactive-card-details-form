import { useAppSelector } from '@/app/hooks/useActions'

interface ILabelInput extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string
  inputPlaceholder: string
  inputId: 'month' | 'year' | 'cvc' | 'name' | 'number'
  maxLength: number
}

export default function LabelInput({
  labelText,
  inputPlaceholder,
  inputId,
  maxLength,
  className,
  ...rest
}: ILabelInput) {
  const validated = useAppSelector((state) => state.validated.value)
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label
        className="text-accent text-xs font-semibold tracking-widest uppercase"
        htmlFor={inputId}
      >
        {labelText}
      </label>
      <input
        id={inputId}
        type="text"
        placeholder={inputPlaceholder}
        maxLength={maxLength}
        className={
          validated[inputId]
            ? 'p-2 border-[1px] border-muted focus:outline-none focus:gradient-border rounded-lg w-full' +
              ' ' +
              className
            : 'p-2 border-[1px] border-danger focus:outline-none focus:gradient-border rounded-lg w-full' +
              ' ' +
              className
        }
        {...rest}
      />
      {!validated[inputId] && (
        <p className="text-danger text-xs">Field must be correct!</p>
      )}
    </div>
  )
}
