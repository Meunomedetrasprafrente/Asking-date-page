function claro(){
    alert("Finalmente! Amém senhor!!!")
}

function nao(t){
    var btn = t;
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 80);
    btn.style.left = geraPosicao(10, 80);
    console.log("Opa... desviei!")
}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + "%")
}