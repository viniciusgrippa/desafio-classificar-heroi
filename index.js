let nomeHeroi = "Paladino";
let xpHeroi = 15000;
let classe = ""

if (xpHeroi < 1000){
    classe = "Ferro";
} else if (xpHeroi <= 2000) {
    classe = "Bronze";
} else if (xpHeroi <= 5000) {
    classe = "Prata";
} else if (xpHeroi <= 7000) {
    classe = "Ouro";
} else if (xpHeroi <= 8000) {
    classe = "Platina";
} else if (xpHeroi <= 9000) {
    classe = "Ascendente";
} else if (xpHeroi <= 10000) {
    classe = "Imortal";
} else {
    classe = "Radiante";
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " +  classe)