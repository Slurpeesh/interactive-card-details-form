export function testCardNumber(value: string) {
  return /^(\d{4}\s?)*\d{0,4}$/.test(value)
}

export function testCharacters(value: string) {
  return /^([a-zA-Z]*)\s?([a-zA-Z]*)?$/.test(value)
}

export function testDigits(value: string) {
  return /^\d*$/.test(value)
}

export function testCardNumberResult(value: string) {
  return /^(\d{4}\s?){4}$/.test(value)
}

export function testNameResult(value: string) {
  return /^[a-zA-Z]+\s[a-zA-Z]+$/.test(value)
}

export function testMonthResult(value: string) {
  return /^(0[1-9]|1[0-2])$/.test(value)
}

export function testYearResult(value: string) {
  return /^\d\d/.test(value)
}

export function testCvcResult(value: string) {
  return /^\d\d\d/.test(value)
}
