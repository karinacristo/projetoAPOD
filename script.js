$("#botao").click(function () {
  let data = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=o2fXRpI1AdbwL2JusWlXY5cTeOEZhGIXCXCynMNn&date=${data}`,
    type: "GET",
    success: function (escolherData) {
      $("#tituloImagem").text(escolherData.title);
      $("#explicacao").text(escolherData.explanation);
      $("#imagem").attr("src", escolherData.url);
    },
  });
});
