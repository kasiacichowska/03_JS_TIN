class Produkt {
    constructor(cena, waga, sklad) {
        this._cena = cena;
        this._waga = waga;
        this._sklad = sklad;
    }

    get cena() {
        return this._cena;
    }

    get waga() {
        return this._waga;
    }

    get sklad() {
        return this._sklad;
    }

    set cena(cena) {
        this._cena = cena;
    }

    set waga(waga) {
        this._waga = waga;
    }

    set sklad(sklad) {
        this._sklad = sklad;
    }

    toString() {
        return `[CENA]: ${this._cena}, [WAGA]: ${this._waga}, [SKLAD]: ${this._sklad}`;
    }
}

class Kosmetyk extends Produkt {
    constructor(cena, waga, sklad, typ, zapach, kolor) {
        super(cena, waga, sklad);
        this._typ = typ;
        this._zapach = zapach;
        this._kolor = kolor;
    }

    get typ() {
        return this._typ;
    }

    get zapach() {
        return this._zapach;
    }

    get kolor() {
        return this._kolor;
    }

    set typ(typ) {
        this._typ = typ;
    }

    set zapach(zapach) {
        this._zapach = zapach;
    }

    set kolor(kolor) {
        this._kolor = kolor;
    }

    toString() {
        return `${super.toString()} [TYP]: ${this._typ}, [ZAPACH]: ${this._zapach}, [KOLOR]: ${this._kolor}`;
    }

}

const produkcik = new Produkt(100, 50, ["woda", "mąka"]);
console.log(produkcik.toString());
produkcik.cena=230;
produkcik.waga=10;
console.log(produkcik.toString());

const szminka = new Kosmetyk(500, 20, ["czerowny barwnik", "wazelina"], "makijaz", "rozany", "czerwony");
console.log(szminka.toString());
szminka.kolor="rozowy";
szminka.typ="pielegnacja";
console.log(szminka.toString());