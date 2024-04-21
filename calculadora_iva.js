//Funcion que retorna el IVA y Total al ingresar el valor de Neto
function calcularNeto() {
    const neto = document.getElementById("neto").value;
    const iva = (neto * 19) / 100;
    const bruto = (neto * 1.19);
    document.getElementById("iva").value = iva.toFixed(0);
    document.getElementById("bruto").value = bruto.toFixed(0);
}

//Funcion que retorna el Netp y Total al ingresar el valor de IVA
function calcularIva() {
    const iva = document.getElementById("iva").value;
    const neto = (iva * 100) / 19;
    const bruto = (neto * 1.19);
    document.getElementById("neto").value = neto.toFixed(0);
    document.getElementById("bruto").value = bruto.toFixed(0);
}

//Funcion que retorna el Neto y IVA al ingresar el valor Bruto
function calcularBruto() {
    const bruto = document.getElementById("bruto").value;    
    const neto = bruto / 1.19;
    const iva = bruto - neto;
    document.getElementById("neto").value = neto.toFixed(0);
    document.getElementById("iva").value = iva.toFixed(0);
}