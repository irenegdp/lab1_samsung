import { Telefono } from "./telefono";
import { Mail } from "./mail";
import { Direccion } from "./direccion";

export class Persona{
    private _nombre:string;
    private _apellidos:string;
    private _edad:number;
    private _DNI:string;
    private _cumple:Date;
    private _colorFav:string;
    private _sexo:string;
    private _direcciones:Direccion[];
    private _mails:Mail[];
    private _telefonos:Telefono[];
    private _notas:string


    constructor(
        nombre:string,
        apellidos:string,
        edad:number,
        DNI:string,
        cumple:Date,
        colorFav:string,
        sexo:string,
        direcciones:Direccion[],
        mails:Mail[],
        telefonos:Telefono[],
        notas:string
        )
    
    {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._DNI = DNI;
        this._cumple = cumple;
        this._colorFav = colorFav;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;


    }

    get_nombre() {
        return this._nombre;
      }
    
    get_DNI(){
        return this._DNI;
    }

    add_direccion(direccion:Direccion){
        this._direcciones.push(direccion)
    }

}

