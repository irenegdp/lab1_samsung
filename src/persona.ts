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

    get nombre() {
        return this._nombre;
      }
    set nombre (nombre:string){
        this._nombre = nombre
    }
    get apellidos(){
        return this._apellidos;
    }
    set apellidos (apellidos:string){
        this._apellidos = apellidos
    }
    get edad(){
        return this._edad;
    }
    set edad (edad:number){
        this._edad = edad
    }
    
    get DNI(){
        return this._DNI;
    }
    set DNI (DNI:string){
        this._DNI = DNI
    }
    get cumple(){
        return this._cumple;
    }
    set cumple (cumple:Date){
        this._cumple = cumple
    }
    get colorFav(){
        return this._colorFav;
    }
    set colorFav (colorFav:string){
        this._colorFav = colorFav
    }
    get sexo(){
        return this._sexo;
    }
    set sexo (sexo:string){
        this._sexo = sexo
    }
    get direcciones(){
        return this._direcciones;
    }
    set direcciones (direcciones:Array<Direccion>){
        this._direcciones = direcciones
    }
    get mails(){
        return this._mails;
    }
    set mails (mails:Array<Mail>){
        this._mails = mails
    }
    get telefonos(){
        return this._telefonos;
    }
    set telefonos (telefonos:Array<Telefono>){
        this._telefonos = telefonos
    }
    get notas(){
        return this._notas;
    }
    set notas (notas:string){
        this._notas = notas
    }

    add_direccion(direccion:Direccion){
        this._direcciones.push(direccion)
    }

    add_mail(mail:Mail){
        this._mails.push(mail)
    }

    add_telefono(telefono:Telefono){
        this._telefonos.push(telefono)
    }
}

