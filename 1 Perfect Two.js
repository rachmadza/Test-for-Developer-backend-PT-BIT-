perfectTwo = (array, number) => {
  //siapkan array penampung untuk menampung indeks dari nilai yang memenuhi kondisi penjumlahan
  let result = [] 

  //lakukan perulangan pada array sebanyak 2 kali
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      //periksa apakah hasil dari penjumlahan perulangan array pertama dan array kedua sama dengan nilai input
      if (array[i] + array[j] === number) {
        //jika hasil dari penjumlahan sama perulangan array pertama dan array kedua sama dengan nilai input, ubah nilai input menjadi 0 agar proses pencarian nilai yang memenuhi nilai input berhenti
        number = 0
        //masukkan nilai indeks dari tiap perulangan yang memenuhi nilai penjumlahan ke dalam array result
        result.push(i, j)
      }
    }
  }

  //periksa jika panjang dari array result
  if (result.length < 1) {
    //jika panjang array result kurang dari 1 tampilkan tulisan '<no way>'
    return '<no way>'
  }
  
  //jika panjang array result memenuhi kondisi, tampilkan array result
  return result
}

let arr = [2, 7, 11, 15]
let num1 = 9
let num2 = 22
let num3 = 13
let num4 = 11
let num5 = 19

console.log(perfectTwo(arr, num1))
console.log(perfectTwo(arr, num2))
console.log(perfectTwo(arr, num3))
console.log(perfectTwo(arr, num4))
console.log(perfectTwo(arr, num5))