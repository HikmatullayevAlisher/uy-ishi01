let son = +prompt("Qo'ylar soni kiriting")

let qoylar =''
for (let i=1; i <= son; i++) {
  if (i==1) {
    qoylar +=`${i} qo'y `
  }
  else{
    qoylar +=`${i} qo'ylar `
  }
}
console.log(qoylar);