let Jasonhealth = 100

let survivant = ['roux', 'génie', 'paresseux', 'brun', 'medecin']

let morts = []

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 0; morts.length < 5; i++) {
    let possibilities = getRandomInt(3)
    if (possibilities == 2) {
        Jasonhealth = Jasonhealth - 15
        console.log("Le tueur a assassiné  " + survivant[i] + " mais il a perdu 15 de vie")
        morts.push(survivant[i])
    }
    if (possibilities == 1) {
        Jasonhealth = Jasonhealth - 10
        console.log("Le " + survivant[i] + " n'a rien senti, il inflige 10 dégats")
        i--
    }
    if (possibilities == 0) {
        console.log("Le tueur a assassiné " + survivant[i] + " RIP")
        morts.push(survivant[i])
    }

    console.log("Jason le tueur à " + Jasonhealth + " PV")

    if (morts.length >= 5) {
        console.log("Plus personne ne respire.")
        break
    }

    if (Jasonhealth <= 0) {
        console.log("Le tueur est décédé")
        console.log("Les survivants ont survécus à l'attaque, RIP" + morts)
        break
    }
}