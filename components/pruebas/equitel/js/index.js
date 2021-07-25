$(document).ready(()=>{
  let secciones = $('#hero #tarjetas');
  secciones.hide();

  // optenemos la cantidad desecciones
  let cantidadSecciones = secciones.length;
  // console.log(cantidadSecciones);

  let siguiente = secciones.eq(0);
  // siguiente.css({position: 'abolute',left: '10px'});
  siguiente.show();

  let paginacion = $('<div id="paginas" ></div>');

  for(let i = 0;  i < cantidadSecciones; ++i){
    $(`<span class="pagina">${ i + 1 }</span>`).appendTo(paginacion);
  }
  paginacion.insertBefore(siguiente);


  $('.pagina').hover(function(){
    $(this).addClass('hover');
  },function(){
    $(this).removeClass('hover');
  })

  $('span').click(function(){
    secciones.hide();
    siguiente = secciones.eq($(this).text() -1);
    siguiente.show();
  })

});

