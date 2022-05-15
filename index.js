var r = document.getElementById("resultado");
var select = document.getElementById("select");
	
	function limpiar() {
		r.innerHTML = "";
	}
function calcular() {
		
		var select = document.getElementById("select").value;
		var radio1 = document.getElementsByName('act-f');
		var radio2 = document.getElementsByName('frec-f');
		var radio3 = document.getElementsByName('fe-f');
		var radio4 = document.getElementsByName('ant-f');
		
		for (var i = 0; i <  radio1.length; i++) {
	  		if (radio1[i].checked) {
	    	var resultado1 = radio1[i].value;
	    	break;
  			}
		}

		for (var i = 0; i <  radio2.length; i++) {
	  		if (radio2[i].checked) {
	    	var resultado2 = radio2[i].value;
	    	break;
  			}
		}

		for (var i = 0; i <  radio3.length; i++) {
	  		if (radio3[i].checked) {
	    	var resultado3 = radio3[i].value;
	    	break;
  			}
		}

		for (var i = 0; i <  radio4.length; i++) {
	  		if (radio4[i].checked) {
	    	var resultado4 = radio4[i].value;
	    	break;
  			}
		}
		var total = parseInt(resultado1) + parseInt(resultado2) + parseInt(resultado3) + parseInt(resultado4) + parseInt(select);
		
		if (!total) {
			alert("Llena todos los campos para continuar");
		}
		else {
			escribir();
		}
		function escribir() {

			if (total == 1 || total == 2 ) {
				r.innerHTML = "Bajo riesgo";
			}
			if (total == 3 || total == 4 ) {
				r.innerHTML = "Alto riesgo";
			}
			if (total == 5) {
				r.innerHTML = "Muy alto riesgo";
			}
		}
	}
	