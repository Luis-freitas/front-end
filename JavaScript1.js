function Enviar(){

    var nome = document.getElementById("nomeid");

    if (nome.value != ""){
        alert('Obrigado ' + nome.value + 'Os seus dados foram encaminhados com sucesso.');
    }

    var email = document.getElementById("emailid");
    if (ElementInternals.value != ""){
        alert('Obrigado ' + email.value + 'Os dados inseridos do email esta ok' )
    }

}