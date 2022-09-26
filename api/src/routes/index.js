const { Router } = require('express');
const chargeproducts = require('./post-products.js')
const productsId = require('./get-products-id.js')
const productsquery = require('./get-products-query.js')
const productsdate = require('./get-products-date.js')
const productsnavbar = require('./get-products-navbar.js')
const createuser = require ('./post-usuario.js')
const pagos = require ('./post-Payment.js')
const addcarros = require ('./post-carrito.js');
const getcarrito = require ('./get-data-carrito.js');
const putcarrito = require ('./remove-prod-cart')
const postBuy = require ('./post-Payment')
const userallowed = require('./comments/get-user-allowed.js')
const addcomment = require('./comments/post-comment')
const getcomment = require('./comments/get-comments')
const upgusuario = require('./dashboard/admin-upg-user.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/', dogRutas )
router.use('/allowed', userallowed)
router.use('/getcomments', getcomment)
router.use('/getDatacarrito', getcarrito)
router.use('/Buy', postBuy)
router.use('/delFromcart', putcarrito)
router.use('/user', createuser)
router.use('/navbar', productsnavbar)
router.use('/date', productsdate)
router.use('/chargeproducts', chargeproducts)
router.use('/', productsId)
router.use('/', productsquery)
router.use('/api/checkout', pagos)
router.use('/addTocart', addcarros)
router.use('/addcomment', addcomment)
router.use('/dashboard/upgUsuario', upgusuario)





module.exports = router;
