$(function () {
    
    let formulario = document.querySelector(".formHeroes");
           
        formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        let idHeroe = document.querySelector("#inputId").value;
        console.log(idHeroe);
        let resultado = validarId(idHeroe);
        
        if (resultado == true) {
            resultadosID(idHeroe);
        };
    });
    
    function validarId(numero) {
        ;
        let Id = true;
    
        let validacionNumero = /[0-9]/;
    
        if (validacionNumero.test(numero) == false || numero < 1 || numero > 730) {
           alert("El dato ingresado no es válido ") 
            Id = false;
        };
    
        return Id;
    };

    function resultadosID(id){
        $('#btn').Hero(id);
        $('#btn').Chart(id)
    };

});