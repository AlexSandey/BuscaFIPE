var urlFipe = new Object();

$(document).ready(function() {
        $("#get-fipe").change(function() {
            var text_fipe = $("#select-fipe").text();
            if(text_fipe == "Selecione o Tipo do Veiculo:"){
            var tipo = $("#get-fipe").val();
            var buscaMarcas = "fipe/tipo";
            urlFipe.tipo = tipo;
            $.ajax({
                url: buscaMarcas,
                type: "get",
                data: {
                    urlFipe
                },
                dataType: "json",
                success: function(data) {
                        $("#get-fipe").html('');
                        $("#select-fipe").text("Selecione a Marca do Veiculo:")
                        document.getElementById('get-fipe').innerHTML +=
                                "<option value=''>MARCA</option>";
                        for (var i = 0; i < data.length; i++) {
                            document.getElementById('get-fipe').innerHTML +=
                                "<option value='" + data[i].id + "'>" + data[i].name +
                                "</option>";
                        }
                        
                    },
                    error: function(erro) {
                        console.log("Error: " + erro);
                    }
                });
            }else if(text_fipe == "Selecione a Marca do Veiculo:"){
                var marca = $("#get-fipe").val();
                var buscaMarcas = "fipe/marca";
                urlFipe.marca = marca;
                $.ajax({
                    url: buscaMarcas,
                    type: "get",
                    data: {
                        urlFipe
                    },
                    dataType: "json",
                    success: function(data) {
                            $("#get-fipe").html('');
                            $("#select-fipe").text("Selecione o Modelo do Veiculo:")
                            document.getElementById('get-fipe').innerHTML +=
                            "<option value=''>MODELO</option>";
                            for (var i = 0; i < data.length; i++) {
                                document.getElementById('get-fipe').innerHTML +=
                                    "<option value='" + data[i].id + "'>" + data[i].name +
                                    "</option>";
                            }
        
                        },
                        error: function(erro) {
                            console.log("Error: " + erro);
                        }
                    });
            }else if(text_fipe == "Selecione o Modelo do Veiculo:"){
                var veiculo = $("#get-fipe").val();
                var buscaMarcas = "fipe/modelo";
                urlFipe.modelo = veiculo;
                $.ajax({
                    url: buscaMarcas,
                    type: "get",
                    data: {
                        urlFipe
                    },
                    dataType: "json",
                    success: function(data) {
                            $("#get-fipe").html('');
                            $("#select-fipe").text("Selecione o Ano do Veiculo:")
                            document.getElementById('get-fipe').innerHTML +=
                            "<option value=''>ANO</option>";
                            for (var i = 0; i < data.length; i++) {
                                document.getElementById('get-fipe').innerHTML +=
                                    "<option value='" + data[i].id + "'>" + data[i].name +
                                    "</option>";
                            }
        
                        },
                        error: function(erro) {
                            console.log("Error: " + erro);
                        }
                    });
            }else if(text_fipe == "Selecione o Ano do Veiculo:"){
                var ano = $("#get-fipe").val();
                var buscaMarcas = "fipe/ano";
                urlFipe.ano = ano;
                $.ajax({
                    url: buscaMarcas,
                    type: "get",
                    data: {
                        urlFipe
                    },
                    dataType: "json",
                    success: function(data) {
                            $("#get-fipe").hide();
                            const preco = data.preco
                            $("#select-fipe").text("O valor do veiculo é: " + preco)
                        },
                        error: function(erro) {
                            console.log("Error: " + erro);
                        }
                    });
            }
    
        });
  

});