class Pokemon {
    constructor (name, attack, defense, hp, luck) {
        this.name = name 
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isLucky(){
        return Math.random() <= this.luck;
    }


    attackPokemon(cible)
    {
        if (this.isLucky()) 
        {
            const damage = this.attack - cible.defense;
            if (damage > 0) 
            {
              cible.hp -= damage;
            }
            console.log(this.name + "attaque " + cible.name + "inflige " + damage + "dégâts");
        } 
        else 
        {
            console.log (this.name +  "rate son attaque contre " + cible.name);
        }
    }
}

let Typhlosion=new Pokemon("Typhlosion", 20, 15, 35, 0.60);

let Fouinar=new Pokemon("Fouinar", 40, 25, 25, 0.40);

while (Typhlosion.hp > 0 && Fouinar.hp > 0)
{
    Typhlosion.attackPokemon(Fouinar);
    console.log (Fouinar.name + " a actuellement " + Fouinar.hp + ' points de vie restants');
  
    if (Fouinar.hp <= 0) {
      console.log (Fouinar.name + ' est vaincu !');
      break;
    }
  
    Fouinar.attackPokemon(Typhlosion);
    console.log (Typhlosion.name + ' a actuellement ' + Typhlosion.hp + ' points de vie restants.');
  
    if (Typhlosion.hp <= 0) {
      console.log(Typhlosion.name + ' est vaincu !');
      break;
    }
}
    
    