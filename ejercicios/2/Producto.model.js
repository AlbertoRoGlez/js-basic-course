class Producto {
  _nombre;
  _precio;
  _peso;
  /**
   *
   * @param {string} Nombre |Nombre del producto
   * @param {number} Precio |Precio del producto
   * @param {number} Peso |Peso en gramos del producto
   */
  constructor(Nombre, Precio, Peso) {
    this._nombre = Nombre;
    this._precio = Precio;
    this._peso = Peso;
  }
  getResumen() {
    return `${this._nombre} ${this._peso} $${this._precio}`;
  }
}

export default Producto;
