import { Persona } from './persona';
import { Telefono } from './telefono';
import { Direccion } from './direccion';
import { Mail } from './mail'

//persona1
let telefono1 = new Telefono("movil", 637856967);
let mail1 = new Mail("personal","JC@hotmail.com")
let direccion1 = new Direccion("calle",99,2,"K","06010","zamora","castilla")
let persona1 = new Persona('JC', 'Rey', 12, '80089821Q', new Date(1998, 5, 7), 'azul', 'M',[direccion1],[mail1], [telefono1], 'noticas')
console.log(persona1.get_nombre())

//persona2
let telefono2 = new Telefono("movil", 637856967);
let mail2 = new Mail("personal","JC@hotmail.com")
let direccion2 = new Direccion("calle",99,2,"K","06020","zamora","castilla")
let persona2 = new Persona('JC', 'Rey', 12, '78542147Q', new Date(1998, 5, 7), 'azul', 'M',[direccion2],[mail2], [telefono2], 'noticas')