$(document).ready(function(){

    var apikey = "bcb04bcc";

    $("#filmeForm").submit(function(event){

        event.preventDefault();

        var filme = $("#filme").val();

        var url = "http://www.omdbapi.com/?apikey=" + apikey;

        var resultado = "";

        $.ajax({
            method: 'GET',
            url: url + "&t=" + filme,
            success:function(data){
                console.log(data);

                resultado = `

                    <div class="conteudo__filme__campos">
                        <h2>${data.Title}</h2>

                        <p>${data.Plot}</p>

                        <p>
                            <span style="font-weight: bold;">Atores: </span> ${data.Actors}
                        </p>

                        <p>
                            <span style="font-weight: bold;">Review (Metacritic): </span>
                            ${data.Metascore}/100
                        </p>
                    </div>

                    <img class="img-thumbnail" src="${data.Poster}" width="300px" height="600px"/>
                    
                `;
            
                $("#resultado").html(resultado);

                if(data.Response == "False"){
           
                    resultado = `<h2>Não foi possível localizar o filme</h2>`;

                    $("#resultado").html(resultado);

                }
            }

        });
    });
});
