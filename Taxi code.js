    let personnage = {
        firstname : 'John',
        santementale : 10,
    }

    let music = ['Cosmic Love - FlorencePlusTheMachine', 'The Devil in I - Slipknot', 'Master of Puppets - Metallica', 'Anissa - Wejdene', 'Death by Glamour - Toby Fox']
    
    let trajet = {
        feuxrouge : 30,
        changements : 0
    }

    function getRandomInt (max) {
        return Math.floor(Math.random() * max);
    }
    
    for (let i = 1; i < trajet.feuxrouge ; i++ ) {
        let radio = getRandomInt(5)
        console.log(music[radio])
        console.log(trajet.feuxrouge - i)
        if (music[radio] == 'Anissa - Wejdene') {
            personnage.santementale --
            console.log("John a perdu un point de vie, il lui en reste " + personnage.santementale)
            trajet.changements ++
        }
        if (personnage.santementale <= 0) {
            console.log("John s'est désintégré")
            break
        }
        if (i == 29) {
            console.log("Arrivé à bon port, John" )
            console.log("Il t'aura quand même fallut " + trajet.changements + " changements !")
            console.log("Tu as survécu à cette épreuve, mais à quel prix ? -> " + personnage.santementale + " de santé mentale... ah oui, quand même")
        }
    }