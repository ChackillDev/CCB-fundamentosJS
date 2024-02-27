jQuery.fn.Chart = function(id){
    $.ajax({
        type:"GET",
        url: `https://superhero.arielhernandezcl.workers.dev/${id}`,
        dataType:"json",
        success: function(data){
            let datos= data.powerstats
                let options = {
                    title: {
                        text: `Estadísticas de ${data.name}`
                    },
                    animationEnabled: true,
                    data: [{
                        type: "pie",
                        startAngle: 90,
                        toolTipContent: "{label}: {y}",
                        showInLegend: "true",
                        legendText: "{label}",
                        indexLabelFontSize: 12,
                        indexLabel:"{label}: {y}",
                        dataPoints: [
                            { y: `${datos.intelligence}`, label: "Inteligencia" },
                            { y: `${datos.strength}`, label: "Fuerza" },
                            { y: `${datos.speed}`, label: "Velocidad" },
                            { y: `${datos.durability}`, label: "Resistencia" },
                            { y: `${datos.power}`, label: "Poder" },
                            { y: `${datos.combat}`, label: "Combate" }
                        ]
                    }]
                };
                $("#chartContainer").CanvasJSChart(options);
        },
        error: function(error){
         alert(error);
        }
    });
};