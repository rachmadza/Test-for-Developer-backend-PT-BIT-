palindromeTerbesar = (input) => {
  //periksa nilai input
  //jika lebih besar dari 4
  if(input > 4) {
    //jika nilai input lebih besar dari 4 tampilkan 'Please input number less or equal to 4'
    return 'Please input number less or equal to 4'
    //jika nilai input kurang dari 1 tampilkan 'Please input number more than 0'
  } else if(input < 1) {
    return 'Please input number more than 0'
  }

  //buat sebuah variable array max untuk menyimpan list angka terbesar
  const max = [9, 99, 999, 9999]

  //buat variable base untuk menjadi basis perkalian yang bernilai dari nilai array max dengan indeks dari nilai input dikurangi 1
  let base = max[input - 1]
  //buat variable multiplier yang berdasarkan nilai base
  let multiplier = base
  //buat variable result yang bernilai dari perkalian base dan multiplier
  let result = base * multiplier
  //buat variable verify berdasarkan nilai result yang telah dibalik untuk perbandingan dengan result apakah nilai tersebut palindrome
  let verify = result.toString().split('').reverse().join('');
  
  //lakukan perulangan selama nilai result dan verify belum sama
  while (result !== verify) {
    //ganti nilai result dengan perkalian nilai base dan multiplier
    result = base * multiplier
    //ganti nilai verify dengan nilai result yang dibalik
    verify = result.toString().split('').reverse().join('');
    
    //periksa apakah nilai result dan verify sama
    if (result == verify) {
      //jika sama tampilkan nilau result
      return result
    }
    //jika tidak kurangi nilai multiplier dengan 1
    multiplier -= 1
    //lanjutkan perulangan hingga nilai result dan verify bernilai sama
  }

}

console.log(palindromeTerbesar(0))
console.log(palindromeTerbesar(1))
console.log(palindromeTerbesar(2))
console.log(palindromeTerbesar(3))
console.log(palindromeTerbesar(4))
console.log(palindromeTerbesar(5))