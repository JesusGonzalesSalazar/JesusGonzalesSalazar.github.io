$(document).ready(function() {
    
    $("#mostrar").click(function(event) {
        $("#rectangulo").fadeIn();
    });
    $("#ocultar").click(function(event) {
        $("#rectangulo").fadeOut();
    });



    $("#mostrar2").click(function(event) {
        $("#rectangulo").fadeIn(500);
    });
    $("#ocultar2").click(function(event) {
        $("#rectangulo").fadeOut(500);
    });

    $("#mostrar3").click(function(event) {
        $("#rectangulo").fadeIn(1500, function() {
            alert ('Efecto fadeIn terminado!');
            });
    });
    $("#ocultar3").click(function(event) {
        $("#rectangulo").fadeOut(1500, function() {
            alert ('Efecto fadeOut terminado!');
            });
    });



    $("#down01").click(function(event) {
        $("#rectangulo").slideDown();
    });
    $("#up01").click(function(event) {
        $("#rectangulo").slideUp();
    });


    $("#down02").click(function(event) {
        $("#rectangulo").slideDown(4000);
    });
    $("#up02").click(function(event) {
        $("#rectangulo").slideUp(4000);
    });

    $("#down03").click(function(event) {
        $("#rectangulo").slideDown("fast");
    });
    $("#down04").click(function(event) {
        $("#rectangulo").slideDown("fast", function() {
            alert ('Efecto slideDown con velocidad fast terminado!');
        });
    });

    
    $("#up03").click(function(event) {
        $("#rectangulo").slideUp("slow");
    });
    $("#up04").click(function(event) {
        $("#rectangulo").slideUp("slow", function() {
            alert ('Efecto slideUp con velocidad slow terminado!');
        });
    });

    $("#toggle01").click(function(event) {
        $("#rectangulo").slideToggle();
    });
    $("#toggle02").click(function(event) {
        $("#rectangulo").slideToggle(4000);
    });
    $("#toggle03").click(function(event) {
        $("#rectangulo").slideToggle("slow", function() {
            alert ('Efecto slideToggle con velocidad slow terminado!');
        });
    });
});

function ftnMostrarSiguiente(){
    var columnas = $("#fila_imagenes").children();

    $.each(columnas, function(indice, col){
        var img = $(col).children();
        if($(img).hasClass('fadeEjercicico')){
            $(img).fadeOut();
            $(img).removeClass('fadeEjercicico');
            if($(img).parent().next().is('div')){
            //if($(img).parent().next().is('div')){
                $(img).parent().next().children().fadeIn();
                $(img).parent().next().children().addClass('fadeEjercicico');
            } else {
                $(img).parent().parent().children().first().children().fadeIn();
                $(img).parent().parent().children().first().children().addClass('fadeEjercicico');
            }
            
            return false;
        }
    });
}

function ftnMostrarAnterior(){
    var columnas = $("#fila_imagenes").children();

    $.each(columnas, function(indice, col){
        var img = $(col).children();
        if($(img).hasClass('fadeEjercicico')){
            $(img).fadeOut();
            $(img).removeClass('fadeEjercicico');
            
            if($(img).parent().prev().is('div')){
                $(img).parent().prev().children().fadeIn();
                $(img).parent().prev().children().addClass('fadeEjercicico');
            } else {
                $(img).parent().parent().children().last().children().fadeIn();
                $(img).parent().parent().children().last().children().addClass('fadeEjercicico');
            }

            
            return false;
        }
    });
}

function ftnMostraTodo(){
    var columnas = $("#fila_imagenes").children();

    $.each(columnas, function(indice, col){
        var img = $(col).children();
        $(img).fadeIn();
    });
    
}