export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _cp: string;
    private _poblacion: string;
    private _provincia: string;

    constructor(
        calle: string,
        numero: number,
        piso: number,
        letra: string,
        cp: string,
        poblacion: string,
        provincia: string
    ) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._cp = cp;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
}
