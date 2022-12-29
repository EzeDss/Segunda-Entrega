const { Router } = require ("express")
const productosRouter = require ("./producto.js")
const carritoRouter = require ("./carrito.js")

const router = Router();

router.use("/productos", productosRouter);
router.use("/carrito", carritoRouter);

module.exports = router;