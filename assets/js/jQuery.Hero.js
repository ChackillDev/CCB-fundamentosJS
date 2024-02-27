jQuery.fn.Hero = function(id){
         
    $.ajax({
        type:"GET",
        url: `https://superhero.arielhernandezcl.workers.dev/${id}`,
        dataType:"json",
        success: function(data){
                $('.result').show();
                $('.respuestaHeroe').html("");
                $('#imgHero').attr('src', data.image.url);
                $('.respuestaHeroe').html(
                        `<p>
                        Nombre: ${data.name} <br>
                        Conexiones: ${data.connections['group-affiliation']} <br>
                        Publicado por: ${data.biography.publisher}<br>
                        Ocupación: ${data.work.occupation}<br>
                        Primera Aparición: ${data.biography['first-appearance']}<br>
                        Altura: ${data.appearance.height}<br>
                        Peso: ${data.appearance.weight}<br>
                        Alianzas: ${data.biography.aliases}`
                        );
                },                
                error: function(error){
                        alert(error);
                       }
                });
};
