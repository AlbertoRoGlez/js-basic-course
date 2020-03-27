class Jugador {
  _Nombre;
  _Estatura;
  _Peso;
  _Numero;
  _Posicion;
  /**
   *
   * @param {String} Nombre
   * @param {number} Estatura
   * @param {number} Peso
   * @param {number} Numero
   * @param {String} Posicion
   */
  constructor(Nombre, Estatura, Peso, Numero, Posicion) {
    this._Nombre = Nombre;
    this._Estatura = Estatura;
    this._Peso = Peso;
    this._Numero = Numero;
    this._Posicion = Posicion;
  }
  // * Get
  getNombre() {
    return this._Nombre;
  }
  getEstatura() {
    return this._Estatura;
  }
  getPeso() {
    return this._Peso;
  }
  getNumero() {
    return this._Numero;
  }
  getPosicion() {
    return this._Posicion;
  }
  // * Set
  setNombre(Nombre) {
    this._Nombre = Nombre;
  }
  setEstatura(Estatura) {
    this._Estatura = Estatura;
  }
  setPeso(Peso) {
    this._Peso = Peso;
  }
  setNumero(Numero) {
    this._Numero = Numero;
  }
  setPosicion(Posicion) {
    this._Posicion = Posicion;
  }
  pasar(jugador) {
    console.log(`${this._Nombre} Pase a ${jugador._Nombre}`);
  }
  correr(distancia, direccion) {
    console.log(
      `${this._Nombre} Corrio ${distancia} metros hacia el ${direccion}`
    );
  }
  saltar(longitud) {
    console.log(`${this._Nombre} Salto ${longitud} metros`);
  }
  tirar(gol) {
    console.log(`${this._Nombre} ${gol ? "Anoto" : "Fallo"}`);
  }
}

export default Jugador;
