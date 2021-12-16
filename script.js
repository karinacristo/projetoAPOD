$("#botao").click(function () {
  let data = $("#data").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=o2fXRpI1AdbwL2JusWlXY5cTeOEZhGIXCXCynMNn&date=${data}`,
    type: "GET",
    success: function (escolherData) {
      $("#tituloImagem").text(escolherData.title);
      $("#explicacao").text(escolherData.explanation);
      $("#imagem").attr("src", escolherData.url);
      let tipoMedia = JSON.stringify(escolherData.media_type);
      if (tipoMedia == '"image"') {
        video.addClass("esconder");
        imagem.attr("src", urlMidia);
        imagem.removeClass("esconder");
      } else {
        video.removeClass("esconder");
        video.attr("src", urlMidia);
        imagem.addClass("esconder");
      }
    },
  });
});
