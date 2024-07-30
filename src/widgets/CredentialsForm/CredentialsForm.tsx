import { useAppDispatch, useAppSelector } from '@/app/hooks/useActions'
import {
  testCardNumber,
  testCardNumberResult,
  testCharacters,
  testCvcResult,
  testDigits,
  testMonthResult,
  testNameResult,
  testYearResult,
} from '@/app/libs/regex'
import {
  setConfirmed,
  setNotConfirmed,
} from '@/app/store/slices/confirmedSlice'
import {
  setCvc,
  setInitCredentials,
  setMonth,
  setName,
  setNumber,
  setYear,
} from '@/app/store/slices/credentialsSlice'
import {
  setCvcValidated,
  setInitValidated,
  setMonthValidated,
  setNameValidated,
  setNumberValidated,
  setYearValidated,
} from '@/app/store/slices/validatedSlice'
import LabelGroupInputs from '@/entities/LabelGroupInputs/LabelGroupInputs'
import LabelInput from '@/entities/LabelInput/LabelInput'
import IconCompleteSvg from '@/widgets/CredentialsForm/svg/IconCompleteSvg'
import { ChangeEvent } from 'react'

export default function CredentialsForm() {
  const validated = useAppSelector((state) => state.validated.value)
  const confirmed = useAppSelector((state) => state.confirmed.value)
  const credentials = useAppSelector((state) => state.credentials.value)
  const dispatch = useAppDispatch()

  function nameHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    // input handler
    if (!testCharacters(value)) {
      e.target.value = value.slice(0, -1)
      return
    }
    // input validation
    dispatch(setNameValidated(testNameResult(value)))
    // updating value
    dispatch(setName(value))
  }

  function numberHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    // input handler
    if (!testCardNumber(value)) {
      e.target.value = value.slice(0, -1)
      return
    }
    // input validation
    dispatch(setNumberValidated(testCardNumberResult(value)))
    // updating value with auto spaces
    if ([4, 9, 14].includes(value.length)) {
      if (credentials.number.endsWith(' ')) {
        e.target.value = value.slice(0, -1)
        dispatch(setNumber(value.slice(0, -1)))
      } else {
        e.target.value = value + ' '
        dispatch(setNumber(value + ' '))
      }
    } else {
      dispatch(setNumber(value))
    }
  }

  function monthHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    // input handler
    if (!testDigits(value)) {
      e.target.value = value.slice(0, -1)
    }
    // input validation
    dispatch(setMonthValidated(testMonthResult(value)))
    // updating value
    dispatch(setMonth(value))
  }

  function yearHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    // input handler
    if (!testDigits(value)) {
      e.target.value = value.slice(0, -1)
    }
    // input validation
    dispatch(setYearValidated(testYearResult(value)))
    // updating value
    dispatch(setYear(value))
  }

  function cvcHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    // input handler
    if (!testDigits(value)) {
      e.target.value = value.slice(0, -1)
    }
    // input validation
    dispatch(setCvcValidated(testCvcResult(value)))
    // updating value
    dispatch(setCvc(value))
  }

  function confirmClickHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    // check if all inputs validated
    for (const [key, val] of Object.entries(validated)) {
      if (key === 'notEmptied' && !val) {
        dispatch(setNameValidated(false))
        dispatch(setCvcValidated(false))
        dispatch(setMonthValidated(false))
        dispatch(setYearValidated(false))
        dispatch(setNumberValidated(false))
        return
      }
      if (!val) return
    }
    // check if form is not empty
    if (credentials.name.length == 0) {
      return
    }
    dispatch(setConfirmed())
  }

  function continueClickHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    dispatch(setInitValidated())
    dispatch(setInitCredentials())
    dispatch(setNotConfirmed())
  }

  return (
    <form className="flex flex-col max-w-80 max-h-80 lg:w-[22rem] lg:max-w-full lg:h-80 gap-2 lg:gap-4">
      {confirmed ? (
        <>
          <div className="flex flex-col justify-center items-center gap-3 pb-2">
            <IconCompleteSvg />
            <p className="mt-4 text-2xl tracking-widest uppercase">
              Thank you!
            </p>
            <p className="text-muted-dark text-base">
              We've added your card details
            </p>
          </div>
          <button
            className="bg-accent hover:bg-gradient-to-r hover:from-[hsl(249,99%,64%)] hover:to-[hsl(278,94%,30%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(249,99%,64%)] text-foreground rounded-lg p-3 mt-3"
            onClick={(e) => continueClickHandler(e)}
          >
            Continue
          </button>
        </>
      ) : (
        <>
          <LabelInput
            labelText={'Cardholder name'}
            inputPlaceholder={'e.g. Jane Appleseed'}
            inputId="name"
            maxLength={30}
            onChange={(e) => nameHandler(e)}
          />
          <LabelInput
            labelText={'Card number'}
            inputPlaceholder={'e.g. 1234 5678 9123 0000'}
            inputId="number"
            maxLength={19}
            onChange={(e) => numberHandler(e)}
          />
          <div className="flex gap-2">
            <LabelGroupInputs
              labelText="Exp. date MM/YY"
              inputsConfig={[
                {
                  id: 'month',
                  maxLength: 2,
                  placeholder: 'MM',
                  className: '',
                  rest: { onChange: (e) => monthHandler(e) },
                },
                {
                  id: 'year',
                  maxLength: 2,
                  placeholder: 'YY',
                  className: '',
                  rest: { onChange: (e) => yearHandler(e) },
                },
              ]}
            />
            <LabelInput
              labelText={'CVC'}
              inputPlaceholder={'e.g. 123'}
              inputId="cvc"
              maxLength={3}
              className=""
              onChange={(e) => cvcHandler(e)}
            />
          </div>
          <button
            className="bg-accent hover:bg-gradient-to-r hover:from-[hsl(249,99%,64%)] hover:to-[hsl(278,94%,30%)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(249,99%,64%)] text-foreground rounded-lg p-3 mt-3"
            onClick={(e) => confirmClickHandler(e)}
          >
            Confirm
          </button>
        </>
      )}
    </form>
  )
}
