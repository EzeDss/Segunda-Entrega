const express = require ("express")
const {
  nuevoCarrito,
  eliminarCarrito,
  getProductosCarrito,
  agregarPruducCarrito,
} = require ("../controllers/controlerFirebase.js")

const { Router } = express;
const carritoRouter = Router();

carritoRouter.delete("/:id?", eliminarCarrito);

carritoRouter.post("/", nuevoCarrito);

carritoRouter.get("/:id/productos", getProductosCarrito);

carritoRouter.post("/:id/productos/:id_prod", agregarPruducCarrito);

module.exports = carritoRouter;