kaprekarsConstant = (input) => {
  const number = input
  const kaprekars = 6174
  let count = 0
  let result

  while (result !== kaprekars) {
    let arrVer = input.toString(10).replace(/\D/g, '0').split('').map(Number);
    let arrAsc = arrVer.sort((a, b) => { return a - b });
    let arrDesc = arrVer.slice().sort((a, b) => { return b - a });

    let asc = ''
    arrAsc.forEach(element => {
      asc += element
    });
    let ascNumber = parseInt(asc, 10)

    let desc = ''
    arrDesc.forEach(element => {
      desc += element
    });
    let descNumber = parseInt(desc, 10)

    result = descNumber - ascNumber
    count++


    if (result === kaprekars) {
      return `Dalam kasus ini, maka konstanta kaprekars dari ${number} adalah: ${count}`
    }

    input = result
  }
}

console.log(kaprekarsConstant(5877))




