# Practicando Poo

## Instrucciones

Realizar un script capaz de generar un punto de venta sencillo siguiendo el siguiente diagrama de clases:

![Diagrama de clases](./diagrama_clases.png)

**Todas las clases deben seguir correctamente el estandar de encapculación**

## Detalle de clases

- ### Producto
  - **Atributos**
    - Nombre -- String
    - Precio -- Number
    - Peso -- Number
  - **Metodos**
    - GetResumen -- Devuelve una string con el siguiente formato: Nombre Peso Precio
      Ejemplo: Chocolate carlos quinto 4g \$10
- ### Pedido
  - **Atributos**
    - Producto -- Producto
    - Cantidad -- Number
    - Total -- Number
  - **Metodos**
    - GetResumen -- Devuelve una string con el siguiente formato: Nombre Cantidad Total
      Ejemplo: Chocolate carlos quinto 4 piezas \$40
- ### Venta
  - **Atributos**
    - Fecha -- Date
    - Pedidos -- Array.Pedido
    - PrecioTotal -- Number
  - **Metodos**
    - GetResumen -- Devuelve una string con el siguiente formato: Fecha - ResumenDePedidos - PrecioTotal
      Ejemplo: 26/03/2020 - Chocolate carlos quinto 4 piezas \$40 - \$40
