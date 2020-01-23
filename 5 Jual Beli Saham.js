let prices1 = [5, 6, 15, 3, 10, 22, 15]
let prices2 = [10,  15,  8,  7,  14]
let prices3 = [100, 90, 80, 75, 65]

jualBeliSaham = (arr) => {
  //cari nilai harga minimum dari list/array harga yang tersedia
  let lowestPrice = Math.min(...arr)
  //cari indeks dari harga minimum dari list/array harga
  let lowestPriceIndex = arr.indexOf(lowestPrice)
  //buat array baru untuk mendapatkan profit yang posisinya setelah harga terendah berdasarkan indeks harga terendah
  let profitRange = arr.filter((price, index) => index > lowestPriceIndex)
  //cari nilai profit dengan cara 
  // - dapatkan harga maksimum dalam array baru yang telah dibuat agar mendapat profit maksimum
  // - kurangkan dengan nilai harga terendah
  let profit = Math.max(...profitRange) - lowestPrice

  //periksa nilai profit
  if(profit <= 0) {
    //jika nilai profit lebih rendah atau sama dengan 0, tampilkan 'Harga selalu turun'
    return 'Harga selalu turun'
  }

  //jika nilai profit lebih dari 0 tampilkan nilai profit
  return profit
}

console.log(jualBeliSaham(prices1))
console.log(jualBeliSaham(prices2))
console.log(jualBeliSaham(prices3))