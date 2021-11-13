$(document).ready(() => {
        $('.usuario').click(() => {
            $('.container-cerrar-sesion').toggleClass("mostrar");
        });

        $('.boton-cancelar-asignatura').click(() => {
            $('.contenedor-crear-asignatura').toggleClass('ocultar-contenedor-asignatura');
        });

        // alert('ESTÁ FUNCIONANDO');

        // Para probar el servidor y base de datos
        // $.get('http://localhost:3000/docentes', data => {
        //     console.log(data);
        // });
    }
);