import Producto from "./Producto.model.js";
class Pedido extends Producto {
  _producto;
  _cantidad;
  _total;
  /**
   *
   * @param {Number} PedidoId
   * @param {Producto} Producto |Nombre del pr
   * @param {Number} Cantidad |Cantidad del pr
   * @param {Number} Total |Costo del producto
   */
  constructor(PedidoId, Producto, Cantidad, Total) {
    super(Producto, Cantidad, Total);
    this._producto = Producto;
    this._cantidad = Cantidad;
    this._total = Producto.getPrecio() * this._cantidad;
    this._pedidoid = PedidoId;
  }
  getResumen() {
    return `${this._nombre} ${this._cantidad} piezas $${this._total}`;
  }
  getTotal() {
    return this._total;
  }

  getPedidoId() {
    return this._pedidoid;
  }
}
export default Pedido;
