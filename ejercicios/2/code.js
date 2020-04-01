import Pedido from "./Pedido.model.js";
import Producto from "./Producto.model.js";
import Venta from "./Venta.model.js";

let producto = new Producto("Chocolate Carlos Quinto", 4, 10);
console.log(producto.getResumen());

let pedido = new Pedido("Chocolate Carlos Quinto", 4, 10);
console.log(pedido.getResumen());

let venta = new Venta(new Date(2000, 3, 2), "Chocolate Carlos Quinto", 4, 10);
console.log(venta.getResumen());
