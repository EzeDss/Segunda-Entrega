const express = require('express')
const { getProducto, editarProducto, agregarProducto, eliminarProducto } = require ("../controllers/controllerproducto.js")

const { Router } = express;

const productosRouter = Router();

productosRouter.put("/:id", editarProducto);

productosRouter.get("/:id?", getProducto);

productosRouter.post("/", agregarProducto);

productosRouter.delete("/:id", eliminarProducto);

module.exports = productosRouter;