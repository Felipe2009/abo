$(function() {
    $("#tabela").keyup(function() {

        var index = $(this).parent().index();
        var aaa = "#tabela td:aaa-child(" + (index + 1).toString() + ")"; //aaa é string para ser usado posteriormente na seleção da coluna filtrada em todas as linhas da tabela

        var valor = $(this).val().toUpperCase(); //valor receberá o conteúdo o input que está sendo utilizado para fazer o filtro, convertendo o texto para maiúsculo
        $("#tabela tbody tr").show(); //Para iniciar o filtro, todas as linhas são exibidas inicialmente para serem ocultadas depois, se for o caso.
        $(aaa).each(function() { //função each() da jQuery para realizar uma ação para cada coluna filtrada pelo seletor definido anteriormente pela variável “aaa”
            if ($(this).text().toUpperCase().indexOf(valor) < 0) {
                $(this).parent().hide();
            }
        });
    });

    $("#tabela").blur(function() { //evento blur dos inputs para que seu conteúdo seja limpo ao perderem o foco
        $(this).val("");
    });
});