import { Persona } from './persona';
import { Telefono } from './telefono';
import { Direccion } from './direccion';
import { Mail } from './mail'


let list_personas = []
//persona1
let telefono1 = new Telefono("movil", 637856967);
let mail1 = new Mail("personal","JC@hotmail.com")
let direccion1 = new Direccion("calle",99,2,"K","06010","zamora","castilla")
let persona1 = new Persona('JC', 'Rey', 12, '80089821Q', new Date(1998, 5, 7), 'azul', 'M',[direccion1],[mail1], [telefono1], 'noticas')
console.log(persona1.nombre)

//persona2
let telefono2 = new Telefono("movil", 637856967);
let mail2 = new Mail("personal","JC@hotmail.com")
let direccion2 = new Direccion("calle",99,2,"K","06020","zamora","castilla")
let persona2 = new Persona('Laura', 'Perez', 12, '78542147Q', new Date(1998, 5, 7), 'azul', 'M',[direccion2],[mail2], [telefono2], 'noticas')

//persona3
let telefono3 = new Telefono("movil", 637856967);
let mail3 = new Mail("personal","JC@hotmail.com")
let direccion3 = new Direccion("calle",99,3,"K","06030","zamora","castilla")
let persona3 = new Persona('Carmina', 'Sanchez', 12, '75962146P', new Date(1998, 5, 7), 'azul', 'M',[direccion3],[mail3], [telefono3], 'noticas')




list_personas.push(persona1,persona2,persona3);

let nueva_direccion = new Direccion("callenueva",103,8,"A","06030","zamora","castilla");
let nuevo_mail = new Mail("trabajo","mailtrabajo@hotmail.com");
let nuevo_telefono = new Telefono("movil", 637898747);

let buscar_dni = '78542147Q'

for (let element in list_personas){
    console.log("----Persona",Number(element) + 1,"-------")
    console.log(list_personas[element])

    if (list_personas[element].DNI == buscar_dni){
        list_personas[element].add_direccion(nueva_direccion)
        list_personas[element].add_mail(nuevo_mail)
        list_personas[element].add_telefono(nuevo_telefono)
        console.log("La persona",Number(element) + 1,"ha sido modificada")
    }
}
console.log("ELEMENTOS MODIFICADOS")
for (let element in list_personas){
    console.log("----Persona",Number(element) + 1,"-------")
    console.log(list_personas[element])
}