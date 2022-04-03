export class Mail {
    private _tipo: string;
    private _direccion: string;

    constructor(tipo: string, direccion: string) {
        this._tipo = tipo;
        this._direccion = direccion;
    }

    set tipo(tipo: string) {
        this._tipo = tipo;
    }
    set direccion(direccion: string) {
        this._direccion = direccion;
    }
}
