import Pedido from "./Pedido.model.js";
class Venta extends Pedido {
  _fechaDeVenta;
  _precioTotal;
  _pedidos;
  /**
   *
   * @param {Date} FechaDeVenta
   * @param {Number} PrecioTotal
   * @param {Array.<Pedido>} Pedidos
   */
  constructor(FechaDeVenta = new Date(), Pedidos) {
    this._fechaDeVenta = FechaDeVenta;
    this._precioTotal = this._precio * this._cantidad;
    this._pedidos = Pedidos;
  }
  getResumen() {
    return `${this._fechaDeVenta.getDate()}/${this._fechaDeVenta.getMonth()}/${this._fechaDeVenta.getFullYear()} - ${
      this._nombre
    } ${this._cantidad} piezas $${this._precio} c/u $${
      this._precioTotal
    } total`;
  }
}
export default Venta;
