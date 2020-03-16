/*
Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato.
*/
$(document).ready(function() {

    $(document).on('click', '.quadrato', function() {       // al click di .quadrato funzione ajax che genera un numero da 1 a 9
        $.ajax({
            context: this,
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                $(this).children('p').text(data.response);  // associo a questo .quadrato cliccato il numero generato
                $(this).removeClass('yellow green');        // elimino l'eventuale sfondo del quadrato
                if (data.response <= 5) {                   // se il numero e' <= 5 sfondo giallo altrimenti verde
                    $(this).addClass('yellow');
                } else {
                    $(this).addClass('green');
                }
            },
            error: function() {

            }
        });
    });



    $('button').click(function() {                  // al click del pulsante resetto la griglia (elimino il numero e lo sfondo di tutti i quadrati)
        $('.quadrato').removeClass('yellow green');
        $('.quadrato p').empty();
    });






});
