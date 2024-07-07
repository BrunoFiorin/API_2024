function validarForm(){
    conteudo = document.getElementById("txtNome").value;
    if(isNaN(conteudo) || conteudo < 1 || conteudo > 10){
        document.getElementById("info").innerHTML = "Valor não permitido";
        return false;
    } else {
        return true;
    }
}

function calcular(){
    v1 = document.getElementById("txtValor1").value
    v2 = document.getElementById("txtValor2").value
    if(isNaN(v1) || isNaN(v2)) {
        document.getElementById("result").innerHTML = "Valor não permitido";
        
    } else{
        soma = parseFloat(v1) + parseFloat(v2);
        document.getElementById("result").innerHTML = "<b>Resultado: " + soma + "</b>";
        
    }
}