
  // Datos
  var estadosMexico = ["Hidalgo", "Querétaro"];

  var municipiosHidalgo = ["Tula", "Tepeji", "Mixquiahuala"];

  var localidadesTula = ["El Llano", "San Marcos", "San Miguel Vindho"];
  var localidadesTepeji = ["San Buenaventura", "San Ildefonso", "Santa María Magdalena"];
  var localidadesMixquiahula = ["Tepeitic", "Motobatha", "Arbol Grande"];

  var municipiosQuerétaro = ["San Juan del Río", "Tequisquiapan", " El Marqués"];
  
  var localidadesSanJuan = ["La Estancia", "La Valla ", "La Llave"];
  var localidadesTequisquiapan = ["San Nicolás", "La Fuente", "Fuentezuelas"];
  var localidadesElMarqués = ["Saldarriaga", "La Pradera", "El Mirador"];


  var estadosEUA = ["California", "Texas"];

  var municipiosCalifornia = ["Los Angeles", "San Francisco"];
  var localidadesLosAngeles = ["Arcadia", "Artesia"];
  var localidadesSanFrancisco = ["Oakland"];

  var municipiosTexas = ["Houston", "Dallas"];
  var localidadesHouston = ["Arcadia", "Artesia"];

  

  // Agrega datos de otros países según sea necesario

  // Funciones JavaScript
  function cargarEstados() {
    var paisSeleccionado = document.getElementById("pais").value;
    var estadoSelect = document.getElementById("estado");
    
    // Limpia el select de estados
    estadoSelect.innerHTML = '<option value="">Seleccione un estado</option>';
    
    // Carga los estados según el país seleccionado
    if (paisSeleccionado === "mexico") {
      estadosMexico.forEach(function (estado) {
        var option = document.createElement("option");
        option.value = estado;
        option.text = estado;
        estadoSelect.add(option);
      });
    }
    // Agrega lógica para otros países

    // Carga los estados según el país seleccionado
    if (paisSeleccionado === "Estados Unidos de America") {
      estadosEUA.forEach(function (estado) {
        var option = document.createElement("option");
        option.value = estado;
        option.text = estado;
        estadoSelect.add(option);
      });
    }
  }

  function cargarMunicipios() {
    var estadoSeleccionado = document.getElementById("estado").value;
    var municipioSelect = document.getElementById("municipio");
    
    // Limpia el select de municipios
    municipioSelect.innerHTML = '<option value="">Seleccione un municipio</option>';
    
    // Carga los municipios según el estado seleccionado
    if (estadoSeleccionado === "Hidalgo") {
      municipiosHidalgo.forEach(function (municipio) {
        var option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.add(option);
      });
    }
    // Agrega lógica para otros estados

    if (estadoSeleccionado === "Querétaro") {
      municipiosQuerétaro.forEach(function (municipio) {
        var option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.add(option);
      });
    }
    if (estadoSeleccionado === "California") {
      municipiosCalifornia.forEach(function (municipio) {
        var option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.add(option);
      });
    }

    if (estadoSeleccionado === "Texas") {
      municipiosTexas.forEach(function (municipio) {
        var option = document.createElement("option");
        option.value = municipio;
        option.text = municipio;
        municipioSelect.add(option);
      });
    }

  }

  function cargarLocalidades() {
    var municipioSeleccionado = document.getElementById("municipio").value;
    var localidadSelect = document.getElementById("localidad");
    
    // Limpia el select de localidades
    localidadSelect.innerHTML = '<option value="">Seleccione una localidad</option>';
    
    // Carga las localidades según el municipio seleccionado
    if (municipioSeleccionado === "Tula") {
      localidadesTula.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }
    if (municipioSeleccionado === "Tepeji") {
      localidadesTepeji.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }

    if (municipioSeleccionado === "Mixquiahuala") {
      localidadesMixquiahula.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }
    


    ////cargar los municipos de QUeretaro 
       
    // Carga las localidades según el municipio seleccionado
    if (municipioSeleccionado === "San Juan del Río") {
      localidadesSanJuan.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }
    if (municipioSeleccionado === "Tequisquiapan") {
      localidadesTequisquiapan.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }

    if (municipioSeleccionado === "El Marqués") {
      localidadesElMarqués.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }
    

    if (municipioSeleccionado === "Los Angeles") {
      localidadesLosAngeles.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }

    if (municipioSeleccionado === "San Francisco") {
      localidadesSanFrancisco.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }

    
    if (municipioSeleccionado === "Houston") {
      localidadesHouston.forEach(function (localidad) {
        var option = document.createElement("option");
        option.value = localidad;
        option.text = localidad;
        localidadSelect.add(option);
      });
    }



  }

  function mostrarDatos() {
    var pais = document.getElementById("pais").value;
    var estado = document.getElementById("estado").value;
    var municipio = document.getElementById("municipio").value;
    var localidad = document.getElementById("localidad").value;

    var datosSeleccionados = document.getElementById("datosSeleccionados");
    datosSeleccionados.innerHTML = "<h3>Datos Seleccionados:</h3>";
    datosSeleccionados.innerHTML += "<p>País: " + pais + "</p>";
    datosSeleccionados.innerHTML += "<p>Estado: " + estado + "</p>";
    datosSeleccionados.innerHTML += "<p>Municipio: " + municipio + "</p>";
    datosSeleccionados.innerHTML += "<p>Localidad: " + localidad + "</p>";
  }
