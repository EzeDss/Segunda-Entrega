const ProductoDao = require('../containers/firebaseContainer.js');

const contenedorProducto = new ProductoDao("back-3e0d2");


const getProductosCarrito = (req, res) => {
    const id = req.params.id; 

    console.log(id);

    if(id === undefined) {
        const productos = contenedorProducto.getAll();
        res.json(productos);
    } else {
        const producto = contenedorProducto.updateById(id);
        console.log(producto);
        res.json(producto);
    }

};

const nuevoCarrito = (request, res) => {
    const newProducto = {
        id : 0,
        timestamp : Date.now(),
        nombre : request.body.nombre,
        descripcion : request.body.descripcion,
        codigo : request.body.codigo,
        precio : request.body.precio,
        foto : request.body.foto,
        stock : request.body.stock,
    }

    res.json(contenedorProducto.add(newProducto));
};

const agregarPruducCarrito = (request, res) => {

    const updateProducto = {
        id : 0,
        timestamp : Date.now(),
        nombre : request.body.nombre,
        descripcion : request.body.descripcion,
        codigo : request.body.codigo,
        precio : request.body.precio,
        foto : request.body.foto,
        stock : request.body.stock,
    }

    res.json(contenedorProducto.updateById(request.params.id, updateProducto));
};

const eliminarCarrito = (request, res) => {

    res.json(contenedorProducto.deleteById(request.params.id));
}

module.exports = {
    getProductosCarrito,
    nuevoCarrito,
    agregarPruducCarrito,
    eliminarCarrito,
};