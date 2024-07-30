import { useAppSelector } from '@/app/hooks/useActions'
import { useRef, useState } from 'react'

interface IInputsConfig {
  id: 'month' | 'year' | 'cvc' | 'name' | 'number'
  placeholder: string
  maxLength: number
  className: string
  rest?: React.InputHTMLAttributes<HTMLInputElement>
}

interface ILabelGroupInputs
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string
  inputsConfig: Array<IInputsConfig>
}

export default function LabelGroupInputs({
  labelText,
  inputsConfig,
}: ILabelGroupInputs) {
  const validated = useAppSelector((state) => state.validated.value)
  const inputRefs = useRef([])
  const [focusIndex, setFocusIndex] = useState(null)
  function handlerLabelClick() {
    if (focusIndex == null) {
      setFocusIndex(0)
      inputRefs.current[0].focus()
    } else {
      const nextIndex = (focusIndex + 1) % inputsConfig.length
      setFocusIndex(nextIndex)
      inputRefs.current[nextIndex].focus()
    }
  }

  return (
    <div className="flex flex-col gap-2 flex-1">
      <label
        onClick={() => handlerLabelClick()}
        className="text-accent text-xs font-semibold tracking-widest uppercase"
      >
        {labelText}
      </label>
      <div className="flex gap-2">
        {inputsConfig.map((inputConfig, index) => (
          <div key={inputConfig.id} className="flex flex-col gap-2">
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              id={`${inputConfig.id}`}
              type="text"
              placeholder={inputConfig.placeholder}
              maxLength={inputConfig.maxLength}
              className={
                validated[inputConfig.id]
                  ? 'p-2 border-[1px] border-muted focus:outline-none focus:gradient-border rounded-lg w-full' +
                    ' ' +
                    inputConfig.className
                  : 'p-2 border-[1px] border-danger focus:outline-none focus:gradient-border rounded-lg w-full' +
                    ' ' +
                    inputConfig.className
              }
              {...inputConfig.rest}
            />
            {!validated[inputConfig.id] && (
              <p className="text-danger text-xs">Field must be correct!</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
