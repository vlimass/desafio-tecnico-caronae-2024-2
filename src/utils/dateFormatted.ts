import { dayjs } from "../lib/dayjs"

function formatDate() {
  const firstLetter = dayjs().format('dddd, DD/MM').charAt(0).toUpperCase() 

  return firstLetter + dayjs().format('dddd, DD/MM').slice(1) 
}

export const dateFormatted = formatDate()
