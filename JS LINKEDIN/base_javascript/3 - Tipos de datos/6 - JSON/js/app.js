"use strict"

// JSON => JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dcHugo'},
    {nombre: 'Paco', twitter: 'dcPaco'},
    {nombre: 'Luis', twitter: 'dcLuis'},
    persona
]

var personaJSON = JSON.stringify(persona);// Convertir un objeto a string

var nuevaPersona = JSON.parse(personaJSON)// Convertir un string a objeto
