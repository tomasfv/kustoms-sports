const { Router } = require('express');
const {infoNavbar} = require('./controlers/controladores')

const router = Router();


router.get('/', async (req, res) => {
    try {
        const result = await infoNavbar();
        res.status(200).json(result)    
    } catch (error) {
        return res.status(400).json(error.message)
    }
})

module.exports = router;