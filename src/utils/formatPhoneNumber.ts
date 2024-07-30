export function formatPhoneNumber(phoneNumber : string) {
  const ddd = phoneNumber.substring(0, 2)
  const firstPart = phoneNumber.substring(2, 7)
  const secondPart = phoneNumber.substring(7, 11)

  return `(${ddd}) ${firstPart}-${secondPart}`
}