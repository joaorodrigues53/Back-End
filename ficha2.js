function imc(peso,altura){
    imc=peso/(altura*altura)
    if (imc<18.5){
        return "Abaixo do peso"
    }else if (imc>=18.5 && imc<25){
        return "Peso normal"
    }else if (imc>=25 && imc<30){
        return "Peso normal"
    }else{
        return "Obeso"
    }
    
}
console.log(imc(170,1.80))