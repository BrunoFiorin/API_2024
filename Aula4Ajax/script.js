function ler(){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        divInfo = document.getElementById("divInfo"); //document.getElement... procura pelo item com a ID especificada
        if(this.readyState == 4 && this.status == 200){
            divInfo.innerHTML = this.responseText       //innetHTML muda o html da pagina
        }
        if(this.readyState == 4 && this.status == 404){
            divInfo.innerHTML = this.statusText;
        }
    };

    xhttp.open("GET" , "info.txt" , true);
    xhttp.send();
}

function gerarNumeros(){
    valor = document.getElementById("txtValor").value;
    divNumeros = document.getElementById("divNumeros"); 
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        
        divNumeros.innerHTML = "Carregando..."; 
        if(this.readyState == 4 && this.status == 200){
            divNumeros.innerHTML = this.responseText       
        }
    };

    xhttp.open("GET" , "server.php?numero=" + valor , true); //? define o que vai ser passado como parâmetro na URL, como no google
    xhttp.send();
}

function procurarContato(){
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        divInfo = document.getElementById("contatos");
        if(this.readyState == 4 && this.status == 200){
            divInfo.innerHTML = this.responseText       
        }

        if(this.readyState == 4 && this.status == 404){
            divInfo.innerHTML = this.statusText;
        }
    };

    xhttp.open("GET" , "revisao.php");
    xhttp.send();
}