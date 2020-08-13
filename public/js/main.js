$(function() {
    var audio = $('audio');
    
    function cargarCanciones() {
        $.ajax({
            url: '/canciones'
        }).done(function(canciones) {
            var lista = $('.lista_canciones');
            lista.empty();
            canciones.forEach(cancion => {
                let nuevoElemento = $("<li class='cancion  btn btn-primary btn-block '>"+cancion.nombre+"</li>");
                nuevoElemento.on("click", cancion, play);
                nuevoElemento.appendTo(lista);
            })
        }).fail(function() {
            console.log("no se ha podido cargar las canciones");
        })
    }
    function play(evento) {
        //Asu es una seleccion nativa para el DOM   
        console.log(evento);
        audio[0].pause();
        console.log(evento.data.nombre);
        audio.attr('src', ('/canciones/' + evento.data.nombre));
        audio[0].play();
    }
    

    cargarCanciones();
});