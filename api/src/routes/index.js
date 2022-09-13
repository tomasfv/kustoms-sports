const { Router } = require('express');
const chargeproducts = require('./post-products.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use('/', dogRutas )
router.use('/', chargeproducts)

module.exports = router;
