const botonNumero = document_querySelectorAll ("[data-numero]")
const botonOperador = document_querySelectorAll ("[data-operador]")
const botonIgual = document_querySelector ("[data-igual]")
const botonBorrarTodo = document_querySelector ("[data-borrar-todo]")
const botonBorrar = document_querySelector ("[data-borrar]")
const textoValorSuperior = document_querySelector ("[data-valor-superior]")
const textoValorInferior = document_querySelector ("[data-valor-inferior]")

botonNumero.forEach{boton => {
    boton.addEventListener ("clik", () => {
        calculadora.agregarNumero(boton.innerText)
        calculadora.imprimirDisplay()
    })
}}