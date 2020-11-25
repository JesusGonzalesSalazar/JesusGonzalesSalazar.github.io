$(document).ready(function () {
    //ejer5();
    var persona = new Object();
    persona.nombre = 'Juan Diego';
    persona.apellido = 'Cabrera';
    persona.ci = '45648321';
    persona.extendido = 'cbba';
    persona.fNacimiento = '12-12-1999';

    persona.mostrarDatos = function(){
        console.log('Datos de la persona: ' + this.nombre + ' ' + this.apellido + ' ' + this.ci + ' ' + this.extendido);
    }
    persona.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }

    persona.getNombre = function(){
        return this.nombre;
    }

    persona.setNombre = function(nombre){
        this.nombre = nombre;
    }

    persona.showHtml = function(){
        $("#datosPersona").find('span.nombre').text(this.nombre);
        $("#datosPersona").find('span.apellido').text(this.apellido);
        $("#datosPersona").find('span.ci').text(this.ci);
        $("#datosPersona").find('span.ext').text(this.extendido);
    }

    persona.showList = function(){
        $("#ulPersona").append("<li>" + this.nombre + "</li>");
        $("#ulPersona").append("<li>" + this.apellido + "</li>");
        $("#ulPersona").append("<li>" + this.ci + "</li>");
        $("#ulPersona").append("<li>" + this.extendido + "</li>");
        $("#ulPersona").append("<li>" + this.fNacimiento + "</li>");
    }

    console.log(persona.getNombre());
    persona.setNombre("Guillermo");
    console.log(persona.getNombre());
    persona.mostrarDatos();
    persona.showList();


    //var trabajo = new Object();
    //trabajo.horas = 450;
    //trabajo.horasEmpleadas = function(){
    //    console.log(this.horas);
    //}

    
    console.log();
});

function sumar(numero1, numero2){
    return (numero1 + numero2);
}

function ejecutarSuma(){
    var valor1 = parseInt($('#valor1').val());
    var valor2 = parseInt($('#valor2').val());

    var resultado = sumar(valor1, valor2);

    $("#mensaje").css('display', 'block');
    $("#mensaje").empty().text("El resultado de la suma es: " + resultado);
    //$("#mensaje").text("El resultado de la suma es: " + resultado);
    //alert("El resultado de la suma es: " + resultado);
}

function fnt_addnombre(){
    var newNombre = $("#add_nombre").val();  
    $("#add_nombre").val('');
    $("#lista").append('<li>'+newNombre+' <a href="#" onclick="fntQuitarLi(this);">quitar</a></li>');
}

function fntQuitarLi(enlace){
    //alert($(enlace).attr('data-nombre'));
    $(enlace).parent().remove();
}

function ejer5(){
    var arreglo = [4,54,67,32,3,23,87,2];
    for(var i = arreglo.length; i>0; i--){
        console.log(arreglo[i]);
    }
}

function fntCopy(enlace){
    //alert("Llego a la funccion");
    var linew = $(enlace).parent().clone();
    //$(enlace).parent().parent().append($(linew));
    //$("#lista").append($(linew));
    //$("ul").append($(linew));
    $("body").find('.ul_personal').append($(linew));

}

function fntAddHtmlPersona(form){
    var persona = new Object();

    persona.nombre = $(form).find('input[name="nombre"]').val();
    persona.apellido = $(form).find('input[name="apellido"]').val();
    persona.ci = $(form).find('input[name="ci"]').val();
    persona.extendido = $(form).find('select[name="extendido"]').val();
    persona.fNacimiento = $(form).find('input[name="f_nacimiento"]').val();

    $("#tPersonas").append(getTrByName(persona));

    $(form)[0].reset();
}

function getTrByName(persona){
    var html = "";
    html += "<tr>";
    html += "<td>"+persona.nombre+"</td>";
    html += "<td>"+persona.apellido+"</td>";
    html += "<td>"+persona.ci+"</td>";
    html += "<td>"+persona.extendido+"</td>";
    html += "<td>"+persona.fNacimiento+"</td>";
    html += "<td><a href='#' onclick='ftnDeleteRow(this)'>Borrar</a> <a href='#'>Copiar</a></td>";
    html += "</tr>";

    return html;

}

function ftnDeleteRow(enlace){
    $(enlace).parent().parent().remove();
}

function getPersona(){
    persona.nombre = 'Juan Diego';
    persona.apellido = 'Cabrera';
    persona.ci = '45648321';
    persona.extendido = 'cbba';
    persona.fNacimiento = '12-12-1999';
    return persona;
}

