const x = "2021-11-17T20:40:09.503Z"
const y = "10d"

function validade(createDate, days) {
  let convertedDays = Number(days.replace('d', ''))
  let expirationDate = new Date(createDate)
  expirationDate = expirationDate.setDate(expirationDate.getDate() + convertedDays)

  if (expirationDate <= new Date()) {
    return false
  } else {
    return true
  }
}

console.log(validade(x, y))
