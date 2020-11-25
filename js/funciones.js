$(document).ready(function () {

});

function ftnMostrarSiguiente() {
    var columnas = $("#fila_imagenes").children();

    $.each(columnas, function (indice, col) {
        var img = $(col).children();
        if ($(img).hasClass('fadeEjercicico')) {
            $(img).fadeOut();
            $(img).removeClass('fadeEjercicico');
            if ($(img).parent().next().is('div')) {
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

function ftnMostrarAnterior() {
    var columnas = $("#fila_imagenes").children();

    $.each(columnas, function (indice, col) {
        var img = $(col).children();
        if ($(img).hasClass('fadeEjercicico')) {
            $(img).fadeOut();
            $(img).removeClass('fadeEjercicico');

            if ($(img).parent().prev().is('div')) {
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

function ftnMostraTodo() {
    var columnas = $("#fila_imagenes").children();

    $.each(columnas, function (indice, col) {
        var img = $(col).children();
        $(img).fadeIn();
    });

}

/*const tiempoRestante = deadline => {
    let now = new Date(),
        tiempo = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(tiempo % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(tiempo / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(tiempo / 3600 % 24)).slice(-2);

    return {
        tiempo,
        remainSeconds,
        remainMinutes,
        remainHours
    }
}



cont conteo = (deadline, elem, mensaje) => {
    const el = document.getElementById(elem);

    const timer = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = '${t.remainHours}:${t.remainMinutes}:${t.remainSeconds}';

        if (t.tiempo <= 1) {
            clearInterval(timerUpdate);
            el.innerHTML(mensaje);
        }
    }, 1000)
};

conteo('Nov 18 2020 1:00:00 GMT-0400', 'temporizador', 'Oferta Expirada')

/*function temporizar(id, minutos, segundos, final) {
    this.id = id;
    this.horas = horas;
    this.minutos = minutos;
    this.segundos = segundos;
    this.final = final;
    this.contador1 = this.minutos;
    this.contador2 = this.segundos;

    this.conteo = function () {
        if (this.contador3 == 0) {
            //this.conteo = null;

            $("#temporizador").text("Expiró la oferta!!!")
            return;
        }

        document.getElementById(this.id).innerHTML = this.contador--;
        setTimeout(this.conteo.bind(this), 1000);
    };
}

let temporizador = new temporizar('temporizador', 10, 0);
temporizador.conteo();*/

//https://d37iyw84027v1q.cloudfront.net/Common/LOTO_Catalog_Spanish_30.pdf
//https://www.sister-soft.com/blog/seguridad-industrial-lockout-tagout-loto/
//https://www.ifam.es/producto/cajas-de-bloqueo-loto/
//file:///G:/Desktop/Sencon/Monitorizaci%C3%B3n%20con%20IoT.pdf
//https://teacherke.files.wordpress.com/2010/09/introduccion-a-la-automatizacion.pdf