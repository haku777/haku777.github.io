function validarColumnas() {
    $(".main-container").css("grid-template-columns", "repeat(" + $("#txt_columnasH").val() + ", 1fr)");
}

$(document).ready(function() {
    $('.rbl_columnas input').change(function() {
        $(".main-container").css("grid-template-columns", "repeat(" + $(this).val() + ", 1fr)");
        $("#txt_columnasH").val($(this).val());
    });
});
// (Id del textbox, Información, nombre de la tabla, Id del hiddenField, valor drp, texto drp)


function autocomplete(inp, arr, tabla,hiddenControl, valor, descripcion) { 
  if (inp != null){
  var currentFocus;
  inp.addEventListener("input", function(e) {   
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < eval("arr." + tabla + ".length"); i++) { 
        if (eval("arr." + tabla + "[i]['" + descripcion + "'].substr(0, val.length).toUpperCase() == val.toUpperCase()")) {
          b = document.createElement("DIV");
          b.setAttribute("id", eval("arr." + tabla + "[i]['" + valor + "']"))
          b.innerHTML = "<strong>" + eval("arr." + tabla + "[i]['" + descripcion + "'].substr(0, val.length)") + "</strong>";
          b.innerHTML += eval("arr." + tabla + "[i]['" + descripcion + "'].substr(val.length)");
          b.innerHTML += "<input type='hidden' value='" + eval("arr." + tabla + "[i]['" + descripcion + "']") + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              agregar(this.getElementsByTagName("input")[0].value, this.getAttribute("id"),hiddenControl);
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { 
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
}
function autocompletarControl(idControl, JsonStr, tabla, hiddenControl, valor, descripcion) {
    catalogos = $.parseJSON(JsonStr);
    autocomplete(document.getElementById(idControl), catalogos, tabla, hiddenControl, valor, descripcion);    
}

function agregar(catalogo, id, item){
    $("#"+ item).val(id+"||"+catalogo);
    __doPostBack('<%# ' + item + '.ClientID %>', 'OnTextChanged');
}


