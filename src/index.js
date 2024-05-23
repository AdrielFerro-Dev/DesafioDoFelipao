let Nomeheroi = "Robsvaldo";
let xp = 3000;
let classif = "";

do {
    
    if (xp < 0){
        console.log("Insira um valor maior que ZERO");
        break;
        
    }
    else if(xp <= 1000){
        classif = "Ferro"
    }
    else if(xp >= 1001 && xp <= 2000 ){
        classif = "Bronze"
    }
    else if (xp >= 2001 && xp <= 5000){
        classif = "Prata"
    }
    else if (xp >= 5001 && xp <= 7000){
        classif = "Ouro"
    }
    else if (xp >= 7001 && xp <= 8000 ){
        classif = "Platina"
    }
    else if (xp >= 8001 && xp <= 9000){
        classif = "Ascendente"
    }
    else if (xp >= 9001 && xp <= 10000 ){
        classif = "Imortal"
    }
    else {
        classif = "Radiante"
    }
    
    console.log("O herói de nome " + Nomeheroi + "está no nível " + classif);
    break;

}while (xp = 0);