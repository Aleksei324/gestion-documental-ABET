$(document).ready(() => {
    alert('ESTÁ FUNCIONANDO');

        $.get('http://localhost:3000/docentes', data => {
            console.log(data);
        });
    }
);