import Producto from "./Producto.model.js";
class Pedido extends Producto {
  _producto;
  _cantidad;
  _total;
  /**
   *
   * @param {Producto} Producto |Nombre del producto
   * @param {Number} Cantidad |Cantidad del producto
   * @param {Number} Total |Costo del producto
   */
  constructor(Producto, Cantidad, Total) {
    super(Producto, Cantidad, Total);
    this._producto = Producto;
    this._cantidad = Cantidad;
    this._total = this._precio * this._cantidad;
  }
  getResumen() {
    return `${this._nombre} ${this._cantidad} piezas $${this._total}`;
  }
}
export default Pedido;
