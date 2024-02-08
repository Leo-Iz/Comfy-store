export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100)
}
// ------------ OR --------------
//   const newNumber = Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(number / 100)
//   return newNumber
// }

export const getUniqueValues = (products, type) => {
  let unique = products.map((item) => {
    return item[type]
  })
  if (type === "colors") {
    unique = unique.flat()
  }
  return ["all", ...new Set(unique)]
}
