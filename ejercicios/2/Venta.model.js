import Pedido from "./Pedido.model.js";
import Producto from "./Producto.model.js";
class Venta extends Pedido {
  _fechaDeVenta;
  _precioTotal;
  _pedidos;
  /**
   * @param {Date} FechaDeVenta |Fehca de venta del producto
   * @param {Number} PrecioTotal |Precio total de la venta
   * @param {Array.<Pedido>} Pedidos |Nombre del producto
   * @param {Number} Cantidad |Cantidad de producto
   */
  constructor(FechaDeVenta = new Date(), Pedidos, Cantidad, PrecioTotal) {
    super(FechaDeVenta, Pedidos, Cantidad, PrecioTotal);
    this._fechaDeVenta = FechaDeVenta;
    this._total = PrecioTotal;
    this._pedidos = Pedidos;
    this._cantidad = Cantidad;
  }
  getResumen() {
    let pedidos = `${this._pedidos} ${this._cantidad}`;
    let fecha = `${this._fechaDeVenta.getDate()}/${this._fechaDeVenta.getMonth()}/${this._fechaDeVenta.getFullYear()}`;
    return `${fecha} - ${pedidos} piezas $${this._total * this._cantidad} `;
  }
}
export default Venta;
