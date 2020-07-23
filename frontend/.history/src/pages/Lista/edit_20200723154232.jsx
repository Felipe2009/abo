$(document).ready(function(){
    $('#tabela tbody tr  td').dblclick(function(){ //chamando o td da tabela, dbl click pra executar função assim q o duplo clique aconteça
        if($('td > input').length >0){ //verificando se tem um elemento input q é filho de td
            return;
        }

        var conteudoOriginal = $(this).text(); //criando var pra resgatar o texto da célula. this ->td
        var novoElemento = $('<input/>', {type:'text', value:conteudoOriginal}); //criando o novoelemento
        $(this).html(novoElemento.bind('blur keydown', function(e){ //

            var keyCode = e.which;//fazendo a confirmação depois do enter 
            if(keyCode == 13){
                var conteudoNovo = $(this).val();

                if(conteudoNovo != ""){
                    $(this).parent().html(conteudoNovo)
                }
            }
         
        if(e.type =="blur"){
            $(this).parent().html(conteudoOriginal)
        }
    }));
    $(this).children().select; //seleciona o conteudo do input
})
})
