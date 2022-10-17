let nuevo = document.getElementById("nuevo");
let modificar = document.getElementById("modificar");
let borrar = document.getElementById("borrar");
let datos = document.getElementById("datos");
let url = "http://144.22.175.9:8082/api/Reservation/all"

inicial()
traerdatos();
traecuatrimotos()
traeclientes()

function inicial() {
  nuevo.style.display = "none";
  modificar.style.display = "none";
  borrar.style.display = "none";
  datos.style.display = "block";
}

function agregar() {

  document.getElementById("startDate").value=""
  document.getElementById("devolutionDate").value=""
  document.getElementById("clientId").value=""
  document.getElementById("quadbikeId").value=""
  
  nuevo.style.display = "block";
  modificar.style.display = "none";
  borrar.style.display = "none";
  datos.style.display = "none";
  document.getElementById("startDate").focus()
}

function editar(id) {
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  let url =
    "https://gc4b6274b64a9d7-uld3e4rzedqin1p1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike";

  /*
  2 propiedad onreadystatechange asigna a una funcion
  que funcion valida si la respuesta fue exitosa
  readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
  le aplica formato y modifica la pagina o vista
*/
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      let respuesta = JSON.parse(this.responseText)

      let idModif = respuesta.items[0].id
      let addressModif = respuesta.items[0].address
      let exensionModif = respuesta.items[0].exension
      let categoryIdModif = respuesta.items[0].category_id
      let nameModif = respuesta.items[0].name

      document.getElementById("idModif").value = idModif
      document.getElementById("addressModif").value = addressModif
      document.getElementById("exensionModif").value = exensionModif
      document.getElementById("categoryIdModif").value = categoryIdModif
      document.getElementById("nameModif").value = nameModif

      //modificamos el titulo para que muestre el valor del codigo de la finca
      document.getElementById("idLabel").innerHTML = "<strong>Quadbike id :</strong>" + idModif

      nuevo.style.display = "none";
      modificar.style.display = "block";
      borrar.style.display = "none";
      datos.style.display = "none";
    }
  };
  peticion.open("GET", url + "/" + id, true);
  peticion.send();

}

function eliminar(id) {
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  let url =
    "https://gc4b6274b64a9d7-uld3e4rzedqin1p1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike";

  /*
  2 propiedad onreadystatechange asigna a una funcion
  que funcion valida si la respuesta fue exitosa
  readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
  le aplica formato y modifica la pagina o vista
*/
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      let respuesta = JSON.parse(this.responseText)

      let idModif = respuesta.items[0].id
      let addressModif = respuesta.items[0].address
      let exensionModif = respuesta.items[0].exension
      let categoryIdModif = respuesta.items[0].category_id
      let nameModif = respuesta.items[0].name

      
      document.getElementById("idDelete").value = idModif
      document.getElementById("idList").innerHTML = "<strong>Quadbike id :</strong>" + idModif
      document.getElementById("addressList").innerHTML = "<strong>Address :</strong>" + addressModif
      document.getElementById("exensionList").innerHTML = "<strong>Exension :</strong>" + exensionModif
      document.getElementById("category_idList").innerHTML = "<strong>Farm categoryId :</strong>" + categoryIdModif
      document.getElementById("nameList").innerHTML = "<strong>Farm Name :</strong>" + nameModif

      nuevo.style.display = "none";
      modificar.style.display = "none";
      borrar.style.display = "block";
      datos.style.display = "none";
    }
  };
  peticion.open("GET", url + "/" + id, true);
  peticion.send();
}

function guardarNuevo() {

  //recuperar la informacion ingresada en el formulario
  let startDateVal = document.getElementById("startDate").value
  let devolutionDateVal = document.getElementById("devolutionDate").value
  let quadbikeId = document.getElementById("quadbikeId").value
  let clientId = document.getElementById("clientId").value

  //creo un objeto javascript
  let objeto = {
    startDate: startDateVal,
    devolutionDate: devolutionDateVal,
    quadbike: {id: parseInt(quadbikeId) },
    client: {idClient: parseInt(clientId) }
  }

  //convierto el objeto de javascript a formato json
  let objetoJson = JSON.stringify(objeto)

  let url ="http://144.22.175.9:8082/api/Reservation/save"

  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {

      //Configura el aspecto de la pagina
      traerdatos()
      inicial()
    }
  }

  peticion.open("POST", url, true)
  peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  peticion.send(objetoJson)
}

function guardarEditar() {

  //recuperar la informacion ingresada en el formulario
  let idQuadbike = document.getElementById("idModif").value
  let addressQuadbike = document.getElementById("addressModif").value
  let exensionQuadbike = document.getElementById("exensionModif").value
  let categoryIdQuadbike = document.getElementById("categoryIdModif").value
  let nameQuadbike = document.getElementById("nameModif").value

  //creo un objeto javascript
  let objeto = {
    id: idQuadbike,
    address: addressQuadbike,
    exension: exensionQuadbike,
    category_id: categoryIdQuadbike,
    name: nameQuadbike
  }

  //convierto el objeto de javascript a formato json
  let objetoJson = JSON.stringify(objeto)

  let url =
    "https://gc4b6274b64a9d7-uld3e4rzedqin1p1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike";

  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 201) {

      //Configura el aspecto de la pagina
      traerdatos()
      inicial()
    }
  }

  peticion.open("PUT", url, true)
  peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  peticion.send(objetoJson)
}

function guardarBorrar() {
  //recuperar la informacion ingresada en el formulario
  let idQuadbike = document.getElementById("idDelete").value

  //creo un objeto javascript
  let objeto = {
    id: idQuadbike
  }

  //convierto el objeto de javascript a formato json
  let objetoJson = JSON.stringify(objeto)

  let url =
    "https://gc4b6274b64a9d7-uld3e4rzedqin1p1.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/quadbike/quadbike";

  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest()

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 204) {

      //Configura el aspecto de la pagina
      traerdatos()
      inicial()
    }
  }

  peticion.open("DELETE", url, true)
  peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  peticion.send(objetoJson)
}

function traerdatos() {
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  url = "http://144.22.175.9:8082/api/Reservation/all"

  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    //almacena el html para generar los registros de la tabla
    let registros = "";
    //valida si la peticion fue exitosa
    if (this.readyState == 4 && this.status == 200) {
      let respuesta = JSON.parse(this.responseText);
      //console.log("Respuesta despues de convertir a JSON: " + respuesta);

      //crear html usando los datos de la respuesta que me da el servicio
      //variable 'respuesta'
      for (let i in respuesta) {
        let id = respuesta[i].idReservation;
        var inicio = format(new Date(respuesta[i].startDate));
        var fin = format(new Date(respuesta[i].devolutionDate));
        
        registros +=
          '<tr>\
                        <th scope="row">' +
                        id +
          "</th>\
                        <td>" +
                        inicio +
          "</td>\
                        <td>" +
                        fin +
          "</td>\
                        <td>" +
                        respuesta[i].quadbike.name + " - " + respuesta[i].quadbike.category.name +
          "</td>\
                        <td>" +
          respuesta[i].client.name +
          '</td>\
                        <td>\
                             <button class="btn btn-outline-dark" onclick="editar(' +
          id +
          ')" disabled>Modificar</button>\
                            <button class="btn btn-outline-dark" onclick="eliminar(' +
          id +
          ')" disabled>Borrar</button>\
                        </td>\
                        </tr>';
      }

      document.getElementById("registros").innerHTML = registros;
    }
  };

  peticion.open("GET", url, true);
  peticion.send();
}

function traecuatrimotos(){
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  url = "http://144.22.175.9:8082/api/Quadbike/all";
  let id;
  let nombre;
  let respuesta;
  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    //almacena el html para generar los registros de la tabla
    let registros = "";
    //valida si la peticion fue exitosa
    if (this.readyState == 4 && this.status == 200) {
      respuesta = JSON.parse(this.responseText)

      //crear html usando los datos de la respuesta que me da el servicio
      //variable 'respuesta'
      for (let i in respuesta) {
        id = respuesta[i].id;
        nombre = respuesta[i].name + " -- " + respuesta[i].year;
        registros += '<option value="' + id + '">' + nombre + "</option>"
      }

      document.getElementById("quadbikeId").innerHTML = registros
      document.getElementById("quadbikeIdModif").innerHTML = registros
    }
  };

  peticion.open("GET", url, true)
  peticion.send();  
}

function traeclientes(){
  //1 crear un objeto XMLHttpRequest
  let peticion = new XMLHttpRequest();
  url = "http://144.22.175.9:8082/api/Client/all"
  let id;
  let nombre;
  let respuesta;
  /*2 propiedad onreadystatechange asigna a una funcion
        que funcion valida si la respuesta fue exitosa
        readyState=4 y status=200, en cuyo caso obtiene la respuesta, 
        le aplica formato y modifica la pagina o vista
    */
  peticion.onreadystatechange = function () {
    //almacena el html para generar los registros de la tabla
    let registros = "";
    //valida si la peticion fue exitosa
    if (this.readyState == 4 && this.status == 200) {
      respuesta = JSON.parse(this.responseText)

      //crear html usando los datos de la respuesta que me da el servicio
      //variable 'respuesta'
      for (let i in respuesta) {
        id = respuesta[i].idClient;
        nombre = respuesta[i].name;
        registros += '<option value="' + id + '">' + nombre + "</option>"
      }

      document.getElementById("clientId").innerHTML = registros
      document.getElementById("clientIdModif").innerHTML = registros
    }
  };

  peticion.open("GET", url, true)
  peticion.send();  
}