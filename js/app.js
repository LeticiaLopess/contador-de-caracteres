$('textarea').on('keyup paste', function(){ // levantou a tecla, ativa a função
    setTimeout(function() {
        var valorTextArea = $('textarea').val().length,
            palavras = $('textarea').val().split(' ').length;
        $('.caracteres').text(valorTextArea);
        $('.palavras').text(palavras);
    }, 200);
});

$('input').on('keyup paste', function(){
    setTimeout(function() {
        var input = $('input').val();
        var multiplica = input * 10 * Math.PI / 23 + 50;
        console.log(multiplica);
        $('.calculo').text(multiplica);
    }, 200);
}); 


// se a pessoa copiar e colar com o teclado, ok, mas se a pessoa copiar e colar com o mouse o evento não ativa por ser o keyup, por isso colocamos o paste junto. 

// Mesmo assim, depois que a pessoa cola com o mouse, devemos colocar um setTimeOut pois o paste só ativa depois de milésimos de segundos então a função só deverá ser executada após esse tempo.