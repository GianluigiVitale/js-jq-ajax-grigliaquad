/*
Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato.
*/
$(document).ready(function() {

    $(document).on('click', '.quadrato', function() {
        $.ajax({
            context: this,
            url: 'https://flynn.boolean.careers/exercises/api/random/int',
            method: 'GET',
            success: function(data) {
                var prova = $(this).children('p').text(data.response);
                $(this).removeClass('yellow green');
                if (data.response <= 5) {
                    $(this).addClass('yellow');
                } else {
                    $(this).addClass('green');
                }
            },
            error: function() {

            }
        });
    });

    // $(document).on('click', '.quadrato', function() {
    //     var prova = $(this).children('p').text();
    //     console.log(prova);
    // });






});
