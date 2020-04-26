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
   */
  constructor(FechaDeVenta = new Date(), Pedidos = []) {
    super(FechaDeVenta, Pedidos);
    this._fechaDeVenta = FechaDeVenta;
    this._pedidos = Pedidos;
    this._total = this.getTotal() this._pedidos.forEach(element => {
      
    });;
  }
  getResumen() {
    let pedidos = `${this._pedidos} ${this._cantidad}`;
    let fecha = `${this._fechaDeVenta.getDate()}/${this._fechaDeVenta.getMonth()}/${this._fechaDeVenta.getFullYear()}`;
    return `${fecha} - ${pedidos} piezas $${this._total * this._cantidad} `;
  }

  addPedido(pedido) {
    this._pedidos.push(pedido);
  }

  updatePedido(pedido) {
    this._pedidos = this._pedidos.map((item) => (item > 5 ? item : null));
  }

  deletePedido(pedido) {
    this._pedidos = this._pedidos.filter((item) => item > 5);
  }
}
export default Venta;
