console.log("Merhaba kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 (const sabittir değiştirilemez.)

console.log(euroDun)

//array
let konutKredileri = ["Konut kredisi", "Emlak Konus Kredisi", "Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log(konutKredileri)