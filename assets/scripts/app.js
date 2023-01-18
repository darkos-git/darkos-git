const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let monsterHealth = 100;


adjustHealthBars(chosenMaxLife);



function attackHandler() {
    const demage = dealMonsterDamage(ATTACK_VALUE)
}
attackBtn.addEventListener('click', attackHandler)
