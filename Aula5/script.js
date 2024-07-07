function lerDados(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        dados = JSON.parse(this.responseText);
        console.log(dados);
        
        texto = "Nome: " +dados.nome +"<br>";
        texto += "Idade: " +dados.idade +"<br>";
        texto += "Anos de Formação: " +dados.anoFormacoes +"<br>";
        texto += "Titulações: <br>";

        dados.graus.forEach(titulo => {
            texto += titulo + "<br>";
        });

        texto += "Filhos: <br>";
        dados.filhos.forEach(filho => {
            texto += filho.nome + " - " + filho.idade + "<br>";
        });
        document.getElementById("divDados").innerHTML = texto;
    };


    xhttp.open("GET" , "meuJson.json" , true);
    xhttp.send()

}