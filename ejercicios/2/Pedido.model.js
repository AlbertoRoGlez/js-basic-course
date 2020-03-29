import Producto from "./Producto.model.js";
class Pedido extends Producto {
  _producto;
  _cantidad;
  _total;
  /**
   *
   * @param {Producto} Producto
   * @param {Number} Cantidad
   * @param {Number} Total
   */
  constructor(Producto, Cantidad, Total) {
    this._producto = Producto;
    this._cantidad = Cantidad;
    this._total = Total;
  }
  getResumen() {
    return `${this._nombre} ${this._cantidad} piezas $${this._total}`;
  }
}
export default Pedido;
